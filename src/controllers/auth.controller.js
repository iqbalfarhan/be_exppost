import * as User from "../models/user.model.js";
import { generateHash, generateToken, validateHash } from "../utils/helper.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    const isPasswordValid = await validateHash(password, user.password);

    if (user || isPasswordValid) {
      const token = await generateToken(user);
      const { password, ...userData } = user;
      res.json({ ...userData, token });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const register = async (req, res) => {
  const { name, email, password: newPassword } = req.body;

  try {
    const hashedPassword = await generateHash(newPassword);
    const newUser = {
      name,
      email,
      password: hashedPassword,
    };
    const [result] = await User.create(newUser);
    newUser.id = result.insertId;

    const token = await generateToken(newUser);
    const { password, ...userData } = newUser;
    res.json({ ...userData, token });
  } catch (error) {
    console.error("Registration failed:", error);
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
};
