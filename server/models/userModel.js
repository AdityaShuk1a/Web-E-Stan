import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    userEmail: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    userPassword: {
        type: String,
        required: true,
        trim:true
    },
    verifyUserOtp: {
        type: String,
        default: ''
    },
    userVerifyOtpExpiredAt: {
        type: Number,
        default: 0
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetOtp: {
        type: String,
        default: ''
    },
    resetOtpExpiredAt: {
        type: Number,
        default: 0
    },
    userFirstName: {
        type: String,
        // required: true,
        trim:true
    },
    userMiddleName: {
        type: String,
        trim:true
    },
    userLastName: {
        type: String,
        // required: true,
        trim:true
    },
    userContactNumber: {
        type: Number,
        // required: true,
        // unique: true,
        default:0
    },
    userSignupDate: {
        type: Date,
        default: Date.now(),
    }
});

export const userTable= mongoose.model('userTable',userSchema)


/*
user-
{
    "userName": "anugya",
    "userEmail": "pehla@gmail.com",
    "userPassword": "pehlapassword",
    "userFirstName": "pehlanaam",
    "userLastName": "pehlalaastnaam",   
    "userContactNumber":123123123
}



*/