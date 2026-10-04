# Task: Test the Signup, Login and Logout implementation

You are a QA engineer. Test the authentication feature end to end, report every failure with evidence, and fix nothing unless I ask. Write the tests as an automated script in this project's existing test framework (if none exists, use Vitest or Jest with Supertest, or plain `fetch` against the running server).

## Step 0: Discover before testing
1. Find the signup, login and logout route handlers and note the exact paths and HTTP methods (e.g. `POST /api/auth/signup`, `POST /api/auth/login`, `POST /api/auth/logout`).
2. Find how the session works: JWT in a cookie, JWT in the `Authorization` header, or a server session. Tests must check the right mechanism.
3. Find one protected route (e.g. `GET /api/me`) to prove sessions work. If none exists, tell me and test logout through the cookie/token behavior only.
4. Find the database and how to reset test data. Use a separate test database, never production data. Use unique emails per run (e.g. `test+<timestamp>@example.com`) and clean up afterwards.

## Validation rules (from the Zod schemas)

**Signup**
| Field | Rule |
|---|---|
| name | required string, trimmed, 1 to 100 chars |
| email | required, trimmed, lowercased, valid email format, max 255 chars |
| password | required string, minimum 6 chars |
| avatar_url | optional; valid URL, or `null`, or `""` |

**Login**
| Field | Rule |
|---|---|
| email | required, trimmed, lowercased, valid email format |
| password | required, minimum 1 char |

## Test cases

### A. Signup: happy paths
- A1. Valid name, email, password returns success (201 or 200) and the user object.
- A2. Valid with a valid `avatar_url` (e.g. `https://example.com/a.png`) is stored correctly.
- A3. `avatar_url: ""` is accepted.
- A4. `avatar_url: null` is accepted.
- A5. `avatar_url` omitted is accepted.
- A6. Name of exactly 1 char and of exactly 100 chars are accepted.
- A7. Password of exactly 6 chars is accepted.
- A8. Email of exactly 255 chars total (valid format) is accepted.
- A9. Email `  TeSt@Example.COM  ` is stored as `test@example.com` (trimmed and lowercased).
- A10. Name `  John  ` is stored as `John` (trimmed).

### B. Signup: validation failures (expect 400 or 422 with a clear message, no user created)
- B1. Empty body `{}`: errors for name, email and password.
- B2. Missing name returns "Name is required".
- B3. `name: ""` returns "Name cannot be empty".
- B4. `name: "   "` (whitespace only) is rejected.
- B5. Name of 101 chars returns "Name cannot exceed 100 characters".
- B6. Missing email returns "Email is required".
- B7. Invalid emails each rejected: `abc`, `abc@`, `@x.com`, `a b@x.com`, `a@x`, `""`.
- B8. Email longer than 255 chars is rejected.
- B9. Missing password returns "Password is required".
- B10. Password of 5 chars returns "Password must be at least 6 characters long".
- B11. `password: ""` is rejected.
- B12. `avatar_url: "not-a-url"` returns "Avatar URL must be a valid URL".
- B13. Wrong types are rejected, not crashed: `name: 123`, `email: true`, `password: 123456`, `name: ["a"]`, `email: {}`.
- B14. Malformed JSON body returns 400, not 500.
- B15. Wrong or missing `Content-Type` is handled gracefully.
- B16. Verify after every failure that NO row was created in the database.

### C. Signup: business logic and security
- C1. Duplicate email returns 409 (or 400) with a clear message.
- C2. Duplicate with different case or whitespace (`TEST@x.com` vs `test@x.com`) is also rejected.
- C3. Two simultaneous signups with the same email: exactly one succeeds, no 500 (race condition).
- C4. The response never contains the password or the hash.
- C5. The password in the database is hashed (bcrypt/argon2), not plain text, and two users with the same password have different hashes (salted).
- C6. Mass assignment: sending extra fields such as `role: "admin"`, `id`, `is_verified: true`, `created_at` must be ignored.
- C7. SQL injection strings in name and email (`'; DROP TABLE users;--`) do not break anything and are stored or rejected safely.
- C8. XSS string in name (`<script>alert(1)</script>`) is stored as plain text and not executed or reflected unescaped.
- C9. Unicode and emoji names (`José`, `李雷`, `😀`) work.
- C10. Signup response does not leak whether internal errors occurred (no stack traces).

### D. Login: happy paths
- D1. Correct email and password returns 200, the user object, and a session (cookie or token).
- D2. Email with different case or surrounding spaces (`  TEST@Example.com `) still logs in.
- D3. Cookie (if used) has `HttpOnly`, `SameSite`, and `Secure` (in production mode), and a sensible expiry.
- D4. Token (if JWT) decodes with the expected claims (user id, expiry) and does not contain the password.
- D5. The issued session works on the protected route (returns the right user).
- D6. Logging in twice works without error.

### E. Login: failures
- E1. Wrong password returns 401 with a generic message.
- E2. Non-existent email returns 401 with the SAME message and status as E1 (no user enumeration).
- E3. Missing email returns "Email is required" (400/422).
- E4. Missing password returns "Password is required" (400/422).
- E5. `password: ""` returns "Password cannot be empty".
- E6. Invalid email format returns "Invalid email address format".
- E7. Wrong types (`email: 123`, `password: null`) are rejected cleanly.
- E8. Empty body and malformed JSON return 400, not 500.
- E9. SQL injection in email or password (`' OR '1'='1`) does not log in.
- E10. Response never contains the password or hash.
- E11. No session is issued on any failed login.
- E12. Brute force: 10+ rapid wrong attempts. Report whether rate limiting or lockout exists (flag as a finding if not).
- E13. Password check is case-sensitive (`Password1` vs `password1`).
- E14. Password with 6+ chars containing leading and trailing spaces is NOT trimmed (the password schema does not trim). Signup with `" abc123 "` then login with `"abc123"` must fail, and login with the exact value must succeed.

### F. Logout
- F1. Logout with a valid session returns 200/204.
- F2. After logout, the cookie is cleared (expired or empty) or the client token is discarded.
- F3. After logout, the protected route returns 401 with the old cookie or token. If the system is stateless JWT and the old token still works, report that as a finding (token revocation or blacklist is missing).
- F4. Logout without any session returns a defined behavior (401 or idempotent 200), not a 500.
- F5. Logout twice in a row does not error.
- F6. Logout with a tampered or invalid token does not crash.
- F7. Logging out one session does not log out the same user's other session, or does so intentionally (report which).
- F8. Logging back in after logout works.

### G. End-to-end flow
1. Signup, then Login, then Protected route (200), then Logout, then Protected route (401), then Login again, then Protected route (200).
2. Signup, then immediately Login with the same credentials works (confirms the hash and compare logic match).
3. Protected route with no token returns 401. With an expired token returns 401. With a token signed by a wrong secret returns 401.

### H. Robustness and misc
- H1. HTTP methods: `GET` on the signup, login and logout routes returns 404 or 405, not 500.
- H2. Very large body (about 1 MB) is rejected gracefully.
- H3. Error responses use a consistent JSON shape.
- H4. CORS and CSRF: if cookie auth is used, check that logout and login cannot be triggered cross-site without protection (report only).
- H5. Passwords and tokens are not written to server logs (check console output during the run).

## Output format
1. Run the full suite and show the results summary (passed / failed / skipped).
2. Give a table: **Test ID | Description | Expected | Actual | Status**.
3. For every failure include the request, the response (status and body), and the suspected cause with the file and line.
4. A separate **Security findings** list for anything from C, E12, F3, H4, H5.
5. End with the top 5 issues to fix first, in priority order.

## Rules
- Do not modify application code. Only add test files.
- Do not skip a test silently; mark it SKIPPED with a reason.
- If an assumption about routes, status codes or response shape is needed, state it at the top of the report.