import { parentTable } from "../models/parentModel.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { jwbSecretToken, nodeEnv, senderEmail, smtpLogin, smtpPassword} from "../config.js";
import transporter from "../config.js";  
import { strict } from "assert";
import pkg from 'jsonwebtoken';
const { JsonWebTokenError } = pkg;
export const userRegister = async (req, res) => {
    const { userName, userEmail, userPassword } = req.body;
    try {
        if (!userName || !userEmail || !userPassword) {
            return res.status(400).send({ success: false, message: `fill out the details please` });
        }
        const userExists = await parentTable.findOne({ userName })
        if (userExists) {
            res.status(400).send({ success: false, message: `USERNAME WITH ${userName} ALREADY EXISTS` })
        };
        const hashedPassword = await bcrypt.hash(userPassword, 10); // 5 se 15 k beech m kch bhi chclega  10 is usually enuff and 5 is less secrtooy
            const newUser = new parentTable({
            userName,
            userEmail,
            userPassword: hashedPassword,
        });
        if (newUser.userContactNumber === 0 || newUser.userContactNumber === null) {
            newUser.userContactNumber = null;
        }
        // console.log(newUser);
        await newUser.save();
        const payload = { id: newUser._id };
        const staySignedIn = req.body.staySignedIn; // from the checkbox on the form if yes then 90 days otherwise 3 hr
        const jwtOptions = { expiresIn: staySignedIn ? '90d' : '3h' };
        // const cookieMaxAge = 1000 * (staySignedIn ? 90 * 24 * 60 * 60 : 3 * 60 * 60); // same as token expiry time 90days or 3 hr
        // console.log(req.body);
        const cookieMaxAge = 1000 * 10 * 24 * 60 * 60;
        const userTokenJWT = jwt.sign({ payload }, jwbSecretToken, jwtOptions);
        res.cookie('userToken', userTokenJWT, {
            httpOnly: true,
            secure: nodeEnv === 'production',
            sameSite: nodeEnv === 'production' ? 'None' : 'Strict',
            maxAge: cookieMaxAge,
        });
        const signupMail = {
            from: senderEmail,
            to: userEmail,
            subject: "Welcome to Budget-Bro :)",
            text: `Your account has been created with email id ${userEmail}`
        };
        await transporter.sendMail(signupMail);
        
        return res.status(200).send({ success: true, message: `signup successful\nWelcome Email sent`,body:newUser });
        ī
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: error.message });
    }
};
export const userLogin = async (req, res) => {
    const { userEmail, userPassword } = req.body;
    if (!userEmail || !userPassword) {
        return res.status(400).send({
            success: false,
            message: `Email or password not filled`
        });
    }
    try {
        const isValid = true;
        const newUser = await parentTable.findOne({ userEmail });
        if (!newUser) {
            isValid = false;
        }
        const passwordMatches = await bcrypt.compare(userPassword, newUser.userPassword);
        if (!passwordMatches) {
            isValid = false
        }
        if (!isValid) {
            return res.status(404).send({ success: false, message: `Email or Password incorrect. Please check your email address and/or password or sign up if you don't have an account.` });
        }
        const payload = { id: newUser._id } //the payload in the jwt body. 
        // const payload = { userId: req.body.user  Id }; 
        const staySignedIn = req.body.staySignedIn; // from the checkbox on the form if yes then 90 days otherwise 3 hr
        const jwtOptions = { expiresIn: staySignedIn ? '90d' : '3h' };
        // const cookieMaxAge = 1000 * (staySignedIn ? 90 * 24 * 60 * 60 : 3 * 60 * 60); // same as token expiry time 90days or 3 hr
        const cookieMaxAge = 1000 * 10 * 24 * 60 * 60;
        const userTokenJWT = jwt.sign(payload, jwbSecretToken, jwtOptions);
        res.cookie('userToken', userTokenJWT, {
            httpOnly: true,
            secure: nodeEnv === 'production',
            sameSite: nodeEnv === 'production' ? 'None' : 'Strict',
            maxAge: cookieMaxAge,
        });
        return res.status(200).send({ success: true, message: `logged in successfully` })
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: err.message
        });
    }
};
export const logout = async (req, res) => {
    try {
        res.clearCookie('userToken', {
            httpOnly: true,
            secure: nodeEnv === 'production',
            sameSite: nodeEnv === 'production' ? 'None' : 'Strict',
            
        });
        return res.status(200).send({ success: true, message: `logged out successfully` });
        
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: err.message
        });
    }
}; 
const genereateOTP = (len) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let otp = "";
    for (let i = 0; i < len; i++) {
        let index = Math.floor(characters.length * Math.random());
        console.log(index);
        otp += String(characters[index]);
    }
    return otp;
};
export const sendOtp = async (req, res) => {
    //userId is being added to the req body in userAuth in middleware. after decoding the jwttoken from the cookies
    try {
        const { userId } = req.body;
        const newUser = await parentTable.findById(userId);
        if (newUser.isVerified) {
            return res.status(400).send({ success: false, message: `Your email-${newUser.userEmail} is already verified chill out :)` });
        }
        const len = 6; //CLASSIC 6 characters long alphanumeric OTP 
        const otp = genereateOTP(len);
        newUser.verifyUserOtp = otp;
        newUser.userVerifyOtpExpiredAt = Date.now()+ 30 * 60 * 1000; //30 minutes in miliseconds
        await newUser.save();
        const verifyMail = {
            from: senderEmail,
            to: newUser.userEmail,
            subject: "Verify your email address for Budget-Bro :)",
            text: `OTP: ${otp} for email verification for the email: ${newUser.userEmail}.\n(This code will expire in 30 minutes)`
        };
        await transporter.sendMail(verifyMail);
        return res.status(200).send({ success: true, message: `OTP verification email sent` });
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: err.message
        });
    }
};
export const verifyOtp = async (req, res) => {
    const { userId, userOtp } = req.body;
    try {
        const newUser = await parentTable.findById(userId);
        if (!newUser ) {
            return res.status(400).send({ success: false, message: `User ID ${userId} does not exist` });
        }        
        if (newUser.isVerified) {
            return res.status(400).send({ success: false, message: `Your email-${newUser.userEmail} is already verified chill out :)` });
        }
        if (!userOtp|| userOtp === '' || userOtp !== newUser.verifyUserOtp) {
            return res.status(400).send({ success: false, message: `INVALID OTP` });
        }
        if (newUser.userVerifyOtpExpiredAt < Date.now()) {
            return res.status(400).send({ success: false, message: `OTP HAS EXPIRED` });   
        }
        if (userOtp === newUser.verifyUserOtp) {
            newUser.isVerified = true;
            newUser.verifyUserOtp = '';
            newUser.userVerifyOtpExpiredAt = 0;
            await newUser.save();
            const verifyMail = {
                from: senderEmail,
                to: newUser.userEmail,
                subject: "Email address verified for Budget-Bro :)",
                text: `Your email: ${newUser.userEmail} is verified.\nHope you have a great experience :)`
            };
            await transporter.sendMail(verifyMail);
        }
        return res.status(200).send({ success: true, message: `OTP verified and confirmation mail sent` });
    } catch (err) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
}

export const isVerified = async (req, res) => {
    try {
        return res.status(200).send({ success: true, message: `User is authenticated` });
    } catch (err) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
};

/*
const { userId } = req.body;
const newUser = await parentTable.findById(userId);
if (!newUser) {
return res.status(400).send({ success: false, message: `User ID ${userId} does not exist` });
}
if (newUser.isVerified) {
return res.status(400).send({ success: false, message: `Your email-${newUser.userEmail} is already verified chill out :)` });
}
*/

// password reset and reset email

export const sendResetOtp = async (req, res) => {
    const { userEmail } = req.body;
    if (!userEmail) {
        return res.status(400).send({ message: `Email is required` });
    }
    try {
        const newUser = await parentTable.findOne(userEmail);
        if (!newUser) {
            return res.status(400).send({ success: false, message: `User not found` });
        }
        const len = 6; //CLASSIC 6 characters long alphanumeric OTP 
        const otp = genereateOTP(len);
        newUser.resetOtp = otp;
        newUser.resetOtpExpiredAt = Date.now() + 30 * 60 * 1000; //30 minutes in miliseconds
        await newUser.save();
        const verifyMail = {
            from: senderEmail,
            to: newUser.userEmail,
            subject: "Reset your password for Budget-Bro :)",
            text: `OTP: ${otp} for resetting your password for the email: ${newUser.userEmail}.\n(This code will expire in 30 minutes)`
        };
        await transporter.sendMail(verifyMail);
        return res.status(200).send({ success: true, message: `OTP verification email sent` });
    } catch (err) {
        console.error(err.message);
        return res.status(400).send({ success: false, message: err.message });
    }
};
export const verifyResetOtp = async (req, res) => {
    const { userId, userOtp, newUserPassword } = req.body;
    try {
        const newUser = await parentTable.findById(userId);
        if (!newUser) {
            return res.status(400).send({ success: false, message: `User ID ${userId} does not exist` });
        }
        if (!userOtp || userOtp === '' || userOtp !== newUser.resetOtp) {
            return res.status(400).send({ success: false, message: `INVALID OTP` });
        }
        if (newUser.resetOtpExpiredAt < Date.now()) {
            return res.status(400).send({ success: false, message: `OTP HAS EXPIRED` });
        }
        if (userOtp === newUser.resetOtp) {
            const hashedPassword = await bcrypt.hash(newUserPassword, 10);
            newUser.userPassword = hashedPassword;
            newUser.resetOtp = '';
            newUser.resetOtpExpiredAt = 0;
            await newUser.save();
            const verifyMail = {
                from: senderEmail,
                to: newUser.userEmail,
                subject: "Password chnaged for Budget-Bro :)",
                text: `Password changed successfully for your email: ${newUser.userEmail}.\nHope you have a great experience :)`
            };
            await transporter.sendMail(verifyMail);
        }
        return res.status(200).send({ success: true, message: `Password has been changed` });
    } catch (err) {
        console.error(err.message);
        return res.status(400).send({ message: err.message });
    }
}