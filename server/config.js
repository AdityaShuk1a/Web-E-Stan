import express from "express";
import mongoose from "mongoose";


import nodemailer from "nodemailer";
const app = express();
export const port = process.env.PORT || 3000;

export const smtpLogin = "8420ca001@smtp-brevo.com";
export const smtpPassword = "9rVdkM5bmX4gW27A";
export const senderEmail = "jaiswalanugya09.aj@gmail.com"; 
export const mongoURL = 'mongodb+srv://jaiswalanugya09aj:CnM6VVwMLHhDeR@moonbeamdb.iy6zs.mongodb.net/?retryWrites=true&w=majority&appName=MoonBeamDB';
export const jwbSecretToken = 'yemerabohotsecretkeyhai';
export const nodeEnv = 'development';
const transporter = nodemailer.createTransport({
	host: "smtp-relay.brevo.com",
	port: 587,
	secure: false, //true only for port 467 acc to boilerplate on nodemailer
	auth: {
		user: smtpLogin,
		pass: smtpPassword,
	},
});
export default transporter;

 


