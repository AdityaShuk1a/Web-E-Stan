import mongoose from "mongoose";
import { type } from "os";

const studySchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userTable'
    },
    totalQuizzes: {
        type: Number,
        default: 0,
        max:2^32
    },
    monthlyScores: {
        type: Number,
        default: 0,
        max:2^32
    },
    targetDailyHours: {
        type: Number,
        default: 0,
        max:2^32
    },
    avgDailyBudget: {
        type: Number,
        default: 0,
        max:2^32
    },
});



export const studyTable = mongoose.model('studyTable', studySchema);