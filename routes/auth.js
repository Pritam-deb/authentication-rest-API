import express from "express";
import { Router } from "express";
import Users from "../model/user.js";
const router = Router();
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new Users({
    name: name,
    email: email,
    password: password,
  });

  try {
    const savedUser = await user.save();
    res.status(200).send(savedUser);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
});

export default router;
