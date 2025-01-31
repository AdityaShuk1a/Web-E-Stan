import { Assessment } from "../models/chapterModels/assessmentModel.js";
// import { Topic } from "../models/Topic"; 

// Create a new assessment
export const createAssessment = async (req, res) => {
    try {
        const { assessmentName, score, questionData } = req.body;
        const newAssessment = new Assessment({
            assessmentName,
            score,
            questions: questionData  // assuming questionData is passed as an array of questions
        });
        await newAssessment.save();
        res.status(201).send({ success: true, message: "Assessment created successfully", assessment: newAssessment });
    } catch (error) {
        res.status(500).send({ success: false, message: "Error creating assessment", error });
    }
}; 


// Associate assessment with a topic
// export const associateAssessmentToTopic = async (req, res) => {
//     try {
//         const { topicId } = req.params;
//         const { assessmentId } = req.body;

//         const topic = await Topic.findById(topicId);
//         if (!topic) {
//             return res.status(404).send({ success: false, message: "Topic not found" });
//         }

//         // Add the assessment to the topic's assessments array
//         topic.assessments.push(assessmentId);
//         await topic.save();

//         res.status(200).send({ success: true, message: "Assessment associated with topic successfully", topic });
//     } catch (error) {
//         res.status(500).send({ success: false, message: "Error associating assessment", error });
//     }
// };
