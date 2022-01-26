import express from "express";
import { Router } from "express";
import Users from "../model/user.js";

import Joi from "@hapi/joi";

const schema = Joi.object({
  name: Joi.string().min(4).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(8).required(),
});

const router = Router();

router.post("/register", async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.send(error.details[0].message);

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
