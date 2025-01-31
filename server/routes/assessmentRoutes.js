import express from "express";
import { createAssessment, } from "../controllers/assessmentController.js";
// import { getAssessmentData } from "../controllers/assessmentController";
const assessmentRouter = express.Router();

assessmentRouter.post("/", createAssessment);           // POST /assessment -> Create a new assessment
// router.put("/:topicId/assessment", associateAssessmentToTopic);  // PUT /topic/:topicId/assessment -> Associate assessment to topic

export default assessmentRouter;
 