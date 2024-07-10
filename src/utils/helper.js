import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

export const generateHash = async (password) => {
  return bcrypt.hash(password, 10);
};

export const validateHash = async (password, hashed) => {
  return await bcrypt.compare(password, hashed);
};

export const generateToken = async (data) => {
  return jwt.sign(data, SECRET_KEY, { expiresIn: "1h" });
};
