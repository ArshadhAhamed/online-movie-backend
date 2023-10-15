import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes";
import adminRouter from "./routes/admin-routes";
import movieRouter from "./routes/movie-routes";
import bookingsRouter from "./routes/booking-routes";
import cors from "cors";
dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose
  .connect(
    `mongodb://admin:${process.env.MONGODB_PASSWORD}@ac-khdnerv-shard-00-00.t1xwsc0.mongodb.net:27017,ac-khdnerv-shard-00-01.t1xwsc0.mongodb.net:27017,ac-khdnerv-shard-00-02.t1xwsc0.mongodb.net:27017/?ssl=true&replicaSet=atlas-yjkie0-shard-0&authSource=admin&retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connected To Database And Server is running")
    )
  )
  .catch((e) => console.log(e));