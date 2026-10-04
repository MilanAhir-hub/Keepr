export type UserRole = "user" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  avatar_url: string | null;
  role: UserRole;
  created_at: Date;
  updated_at: Date;
}

export interface CreateUserInput {
  name: string;
  email: string;
  password_hash: string;
  avatar_url?: string | null;
  role?: UserRole;
}

export interface UpdateUserInput {
  name?: string;
  email?: string;
  password_hash?: string;
  avatar_url?: string | null;
  role?: UserRole;
}

export type SafeUser = Omit<User, "password_hash">; //always send user without password to the frontend
