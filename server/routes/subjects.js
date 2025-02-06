const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Load hardcoded data from JSON file
const subjectsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/subjects.json"), "utf8")
);

// API Route to Get All Subjects
router.get("/subjects", (req, res) => {
  res.json(subjectsData);
});

// Get Chapters by Subject & Grade
router.get("/subjects/:subject/:grade", (req, res) => {
  const { subject, grade } = req.params;
  if (subjectsData[subject] && subjectsData[subject][grade]) {
    res.json(subjectsData[subject][grade]);
  } else {
    res.status(404).json({ message: "Data not found" });
  }
});
//  

export default router;
