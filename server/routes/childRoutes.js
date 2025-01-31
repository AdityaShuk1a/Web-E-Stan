


import express from "express";
import { createChild, getChildData } from "../controllers/childController.js";

const childRouter = express.Router();

childRouter.post("/", createChild);              // POST /api/child -> Create a new child
childRouter.get("/:childId", getChildData);      // GET /api/child/:childId -> Get child by ID
// router.put("/:childId/progress", updateChildProgress);  // PUT /child/:childId/progress -> Update child's progress
// router.get("/:childId/progress", getChildProgress);  // GET /child/:childId/progress -> Get child's progress

export default childRouter;
