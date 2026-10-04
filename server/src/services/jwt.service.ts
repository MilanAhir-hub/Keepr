import jwt, { SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "default_jwt_secret_please_change_in_production";
const DEFAULT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

export interface TokenPayload {
  userId?: string;
  id?: string;
  email?: string;
  [key: string]: unknown;
}


export const generateToken = (
  payload: TokenPayload,
  expiresIn: string | number = DEFAULT_EXPIRES_IN
): string => {
  const options: SignOptions = {
    expiresIn: expiresIn as SignOptions["expiresIn"],
  };

  return jwt.sign(payload, JWT_SECRET, options);
};


export const verifyToken = <T extends object = TokenPayload>(token: string): T => {
  return jwt.verify(token, JWT_SECRET) as T;
};


export const decodeToken = <T extends object = TokenPayload>(token: string): T | null => {
  return jwt.decode(token) as T | null;
};

export default {
  generateToken,
  verifyToken,
  decodeToken,
};
