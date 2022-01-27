import express from "express";
import { Router } from "express";
import Users from "../model/user.js";
import bcrypt from "bcrypt";

import { registerValidation } from "../validation.js";

const router = Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  //Valudate Data
  const { error } = registerValidation(req.body);
  if (error) return res.send(error.details[0].message);

  //Check if user in DB
  const emailExist = await Users.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists!");

  //Create  a new user
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new Users({
    name: name,
    email: email,
    password: hashedPassword,
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
