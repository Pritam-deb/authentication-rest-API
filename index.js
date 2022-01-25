import express from "express";
import bodyParser from "body-parser";

import authRoute from "./routes/auth.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/auth", authRoute);

app.get("/", (req, res) => {
  console.log("Got request from browser!");
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
