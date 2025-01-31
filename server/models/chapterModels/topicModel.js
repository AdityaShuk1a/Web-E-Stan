import mongoose from "mongoose";
const topicSchema = new mongoose.Schema({
	topicName: {
		type: String,
		required: true
	},
	timeSpent: {
		type: Number,
		default: 0  // Time spent in seconds
	},
	openedCount: {
		type: Number,
		default: 0  // How many times opened
	},
	completed: {
		type: Boolean,
		default: false  // Marked as read or not
	},
	assessments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Assessment'  // Reference to Assessment schema
	}],
});
export const Topic = mongoose.model('Topic', topicSchema);
