import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import apiRoutes from "./routes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Body parser & cookie parser middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Health check endpoint
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", message: "Server is healthy" });
});

// API Routes
app.use("/api", apiRoutes);

// Start the server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Test Health: http://localhost:${PORT}/health`);
      console.log(`Auth Signup: http://localhost:${PORT}/api/auth/signup`);
      console.log(`Auth Login:  http://localhost:${PORT}/api/auth/login`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

export default app;

