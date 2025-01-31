import express from "express";
import { recordQuizAttempt, trackIncorrectAttempts } from "../controllers/quizController.js";

const quizRouter = express.Router();

quizRouter.post("/:childId/quiz-attempt", recordQuizAttempt);  // POST /child/:childId/quiz-attempt -> Record a quiz attempt
quizRouter.post("/:assessmentId/track-incorrect", trackIncorrectAttempts);  // POST /assessment/:assessmentId/track-incorrect -> Track incorrect attempts for a question

export default quizRouter;
