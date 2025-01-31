import { Child } from "../models/childModel.js";
import { Assessment } from "../models/chapterModels/assessmentModel.js";

// Record a quiz attempt 
export const recordQuizAttempt = async (req, res) => {
    try {
        const { childId, assessmentId, score, noOfAttempts } = req.body;

        if (!childId || !assessmentId || score === undefined || noOfAttempts === undefined) {
            return res.status(400).send({ success: false, message: "Missing required fields" });
        }

        const child = await Child.findById(childId);
        if (!child) {
            return res.status(404).send({ success: false, message: "Child not found" });
        }

        // Add new quiz attempt
        child.quizAttempts.push({
            assessmentID: assessmentId,
            score,
            noOfAttempts,
            dateTaken: new Date(), // Ensure date is recorded
        });

        await child.save();

        res.status(200).send({ success: true, message: "Quiz attempt recorded successfully", child });
    } catch (error) {
        res.status(500).send({ success: false, message: "Error recording quiz attempt", error });
    }
};

// Track incorrect attempts for a question
export const trackIncorrectAttempts = async (req, res) => {
    try {
        const { assessmentId, questionId } = req.body;

        if (!assessmentId || !questionId) {
            return res.status(400).send({ success: false, message: "Missing required fields" });
        }

        const assessment = await Assessment.findById(assessmentId);
        if (!assessment) {
            return res.status(404).send({ success: false, message: "Assessment not found" });
        }

        // Use `.equals()` instead of `.toString()`
        const question = assessment.incorrectAnswers.find(q => q.questionId.equals(questionId));

        if (question) {
            question.incorrectAttempts += 1;
        } else {
            assessment.incorrectAnswers.push({ questionId, incorrectAttempts: 1 });
        }

        await assessment.save();
        res.status(200).send({ success: true, message: "Incorrect attempts tracked successfully", assessment });
    } catch (error) {
        res.status(500).send({ success: false, message: "Error tracking incorrect attempts", error });
    }
};
