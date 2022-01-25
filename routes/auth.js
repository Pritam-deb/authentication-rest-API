import express from "express";
import { Router } from "express";
import Users from "../model/user.js";
const router = Router();

router.post("/register", async (req, res) => {
  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.insertOne();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send("Error while posting");
  }
});

export default router;
