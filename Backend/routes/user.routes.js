import { Router } from "express";
import { User } from "../models/user.model.js";
import { registerUser } from "../controller/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();
router.route("/register").post(registerUser);

export default router;
