import { Router } from "express";
import { User } from "../models/user.model.js";
import { loginUser, registerUser } from "../controller/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import cors from "cors";


const router = Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

//secure routes: -
export default router;
