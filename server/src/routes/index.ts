import { Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";

const router = Router();

// Auth routes mounted at /auth
router.use("/auth", authRoutes);

// User routes mounted at /user
router.use("/user", userRoutes);

export default router;
