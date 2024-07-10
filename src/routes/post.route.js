import { Router } from "express";
import {
  createPost,
  getPosts,
  findPost,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.get("/", getPosts);
postRouter.get("/:id", findPost);
postRouter.post("/", createPost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

export default postRouter;
