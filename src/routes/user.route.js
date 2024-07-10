import { Router } from "express";
import {
  createUser,
  getUsers,
  findUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", findUser);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
