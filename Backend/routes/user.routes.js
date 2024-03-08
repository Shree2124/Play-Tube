import { Router } from "express";
import { User } from "../models/user.model.js";
import { registerUser } from "../controller/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import cors from "cors";
import express from "express"

const app = express();

app.use(
  cors({
    origin: ["https://play-tube-iota.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

const router = Router();
router.route("/register").post(registerUser);

export default router;
