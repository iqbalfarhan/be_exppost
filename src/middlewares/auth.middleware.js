import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as User from "../models/user.model.js";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Authorization denied. Token is not provided." });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await User.find(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json(error);
  }
};

export default authMiddleware;
