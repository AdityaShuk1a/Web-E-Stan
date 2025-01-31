import mongoose from "mongoose";

const childSchema = new mongoose.Schema({
    childName: { 
        type: String, 
        required: true, 
        trim: true 
    },
    progress: { 
        type: Number, 
        default: 0  // Overall progress of the child (across all subjects)
    },
    // studyScore: { 
    //     type: Number, 
    //     default: 0  // Overall performance metric (across all subjects)  //future subject wise 
    // },
	subjects: [{
		subjectName: {
			type: String,
			// required: true
		},
        // type: mongoose.Schema.Types.ObjectId, 
        // ref: 'Subject'  // Reference to the Subject schema
    }],  // Array of subjects the child is enrolled in
    parentID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'parentTable',  // Reference to the parent of this child
        required: true 
    },
    childSignupDate: { 
        type: Date, 
        default: Date.now 
    },
    quizAttempts: [{
        assessmentID: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Assessment'  // Reference to the Assessment schema
        },
        score: { 
            type: Number  // Score for each assessment
        },
        dateTaken: { 
            type: Date, 
            default: Date.now  // Date when the assessment was taken
        },
        noOfAttempts: { 
            type: Number, 
            default: 0  // Number of attempts the child took for the assessment
        }
    }]
});

export const Child = mongoose.model('Child', childSchema);

// await Child.updateOne(
//     { _id: childId, "subjects.math.chapters.topics._id": topicId },
//     {
//         $push: {
//             "subjects.math.chapters.$.topics.$.assessments": {
//                 assessmentName: "Math Quiz 2",
//                 totalQuestions: 10,
//                 correctAnswers: 10,
//                 questions: [/* question details */]
//             }
//         }
//     }
// );