import mongoose from "mongoose";
import express from "express";
import cors from "cors"; 
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRouter.js";
import { mongoURL ,port } from "./config.js";
import userRouter from "./routes/userRouter.js";
import childRouter from "./routes/childRoutes.js";
import assessmentRouter from "./routes/assessmentRoutes.js";
import quizRouter from "./routes/quizRoutes.js";
const app = express();
app.use(
  cors({
    // origin: "http://localhost:7000",
    // methods: ["GET", "POST", "PUT", "DELETE"],
      // allowedHeaders: "Content-Type",
    credentials: true
  })
);

app.use(express.json()); 
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('base page');
});
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/child", childRouter);
app.use("/api/assessment", assessmentRouter);
app.use("/api/quiz", quizRouter);

const mongoConnect = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("\n--- MongoDB connected ---");
    app.listen(port, () => {
      console.log(`--- Server running on port ${port} ---`);
    });
  } catch (err) {
    console.error("--- MongoDB connection error ---", err);
  }
};

mongoConnect();

