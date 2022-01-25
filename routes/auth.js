import express from "express";
import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  console.log("recieved a post req");
  res.send("this is  auth page");
});

export default router;
