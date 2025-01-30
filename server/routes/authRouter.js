import express from "express";
import { isVerified, logout, sendOtp, sendResetOtp, userLogin, userRegister, verifyOtp, verifyResetOtp } from "../controllers/authController.js";
import { userAuth } from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

authRouter.post('/register', userRegister);
authRouter.post('/login', userLogin);
authRouter.post('/logout', logout);
authRouter.post('/send-otp', userAuth, sendOtp);
authRouter.post('/verify-otp',userAuth, verifyOtp);
authRouter.post('/is-verified',userAuth, isVerified);
authRouter.post('/send-reset-otp', sendResetOtp);
authRouter.post('/verify-reset-otp', verifyResetOtp);

export default authRouter;  