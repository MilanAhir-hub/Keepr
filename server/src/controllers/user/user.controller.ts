import { Request, Response } from "express";
import { UserModel } from "../../models/user.model";
import { SafeUser, User } from "../../types/user.types";

/**
 * Remove sensitive fields (e.g. password_hash) before returning user profile object.
 */
export const toSafeUser = (user: User): SafeUser => {
  const { password_hash, ...safeUser } = user;
  return safeUser;
};

/**
 * GET /api/user/profile
 * Returns the authenticated user profile with:
 * id, name, email, role, avatar_url, storage_quota, created_at, updated_at
 */
export const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const authUser = (req as any).user;
    if (!authUser?.id) {
      res.status(401).json({
        success: false,
        message: "Unauthorized.",
      });
      return;
    }

    const user = await UserModel.findById(authUser.id);
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found.",
      });
      return;
    }

    const profile = toSafeUser(user);

    res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    console.error("GetProfile error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
