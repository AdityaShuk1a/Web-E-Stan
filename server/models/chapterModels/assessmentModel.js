import mongoose from "mongoose";
const assessmentSchema = new mongoose.Schema({
	assessmentName: {
		type: String,
		required: true
	},
	score: {
		type: Number,
		required: true
	},
	dateTaken: {
		type: Date,
		default: Date.now
	},
	attempts: {
		type: Number,
		default: 1
	},
	incorrectAnswers: [{
		questionId: mongoose.Schema.Types.ObjectId,
		attempts: {
			type: Number,
			default: 1
		},
		question: {  // The questions for the assessment
			type: String,
			required: true
		},
		options: [{  // Options for the question
			optionText: {
				type: String,
				required: true
			},
			isCorrect:
			{
				type: Boolean,
				default: false
			}
		}],
		correctAnswer: {  // The correct answer for the question
			type: String,
			required: true
		},
		userAnswer: {  // User's answer to the question
			type: String,
			default: ""
		},
		incorrectAttempts: {  // Track how many times the question was answered incorrectly
			type: Number,
			default: 0
		}
	}]
});
export const Assessment = mongoose.model('Assessment', assessmentSchema);



