import { Router } from "express";
import { getProfile } from "../controllers/user/user.controller";
import { authenticateToken } from "../middlewares/auth.middleware";

const router = Router();

// GET /api/user/profile
router.get("/profile", authenticateToken, getProfile);

export default router;
