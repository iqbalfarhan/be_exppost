import * as User from "../models/user.model.js";
import { generateToken, validateHash } from "../utils/helper.js";

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
