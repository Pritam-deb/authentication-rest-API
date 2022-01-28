import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
//Route
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, () => console.log("Connected to db"));

app.use(bodyParser.json());
app.use("/api/users", authRoute);
app.use("/api/user", postRoute);

app.get("/", (req, res) => {
  console.log("Got request from browser!");
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
