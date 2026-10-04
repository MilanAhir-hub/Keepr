import { Request, Response, CookieOptions } from "express";
import bcrypt from "bcryptjs";
import { UserModel } from "../../models/user.model";
import { generateToken } from "../../services/jwt.service";
import { SafeUser, User } from "../../types/user.types";

/**
 * Default cookie options for JWT token.
 * Uses HTTP-only cookies to protect against XSS attacks.
 */
export const COOKIE_OPTIONS: CookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
};

/**
 * Remove sensitive fields (e.g. password_hash) before returning user object.
 */
const toSafeUser = (user: User): SafeUser => {
  const { password_hash, ...safeUser } = user;
  return safeUser;
};

/**
 * POST /api/auth/signup
 * Register a new user, issue a JWT token, set it in HTTP-only cookie, and send response.
 */
export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, avatar_url } = req.body;

    // 1. Validation
    if (!name || !email || !password) {
      res.status(400).json({
        success: false,
        message: "Name, email, and password are required.",
      });
      return;
    }

    if (typeof password !== "string" || password.length < 6) {
      res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long.",
      });
      return;
    }

    // 2. Check if user already exists
    const existingUser = await UserModel.findByEmail(email);
    if (existingUser) {
      res.status(409).json({
        success: false,
        message: "User with this email already exists.",
      });
      return;
    }

    // 3. Hash password
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    // 4. Create user in database
    const newUser = await UserModel.create({
      name,
      email,
      password_hash,
      avatar_url: avatar_url || null,
    });

    // 5. Generate JWT token using JWT service
    const token = generateToken({
      id: newUser.id,
      email: newUser.email,
    });

    // 6. Set token in HTTP-only cookie
    res.cookie("token", token, COOKIE_OPTIONS);

    // 7. Send response
    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      user: toSafeUser(newUser),
      token,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error during registration.",
    });
  }
};

/**
 * POST /api/auth/login
 * Authenticate user, verify password, issue JWT token in HTTP-only cookie, and send response.
 */
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // 1. Validation
    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
      return;
    }

    // 2. Find user by email
    const user = await UserModel.findByEmail(email);
    if (!user) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
      return;
    }

    // 3. Compare password with hash
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
      return;
    }

    // 4. Generate JWT token using JWT service
    const token = generateToken({
      id: user.id,
      email: user.email,
    });

    // 5. Store token inside HTTP-only cookie
    res.cookie("token", token, COOKIE_OPTIONS);

    // 6. Send response
    res.status(200).json({
      success: true,
      message: "Logged in successfully.",
      user: toSafeUser(user),
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error during login.",
    });
  }
};

/**
 * POST /api/auth/logout
 * Clear the authentication cookie.
 */
export const logout = async (_req: Request, res: Response): Promise<void> => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    });

    res.status(200).json({
      success: true,
      message: "Logged out successfully.",
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error during logout.",
    });
  }
};
