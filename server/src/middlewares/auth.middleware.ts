import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../services/jwt.service";


  //Middleware to authenticate requests using JWT stored in cookies or Authorization header.
 
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    let token = req.cookies?.token;

    if (!token && req.headers.authorization) {
      const authHeader = req.headers.authorization;
      if (authHeader.startsWith("Bearer ")) {
        token = authHeader.substring(7);
      }
    }

    if (!token) {
      res.status(401).json({
        success: false,
        message: "Authentication token missing.",
      });
      return;
    }

    const decoded = verifyToken(token);
    (req as any).user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};
