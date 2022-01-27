import { Router } from "express";
import auth from "./verifyToken.js";
const router = Router();

router.get("/", auth, (req, res) => {
  res.json({
    post: {
      title: "Test post",
      description: "this has the post's desc in it",
    },
  });
});

export default router;
