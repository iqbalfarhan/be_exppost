import { generateHash } from "../utils/helper.js";
import * as User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const [results] = await User.get();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
};

export const findUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await User.find(id);
    if (results.length === 0) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(results[0]);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to find user", error });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await User.destroy(id);
    if (results.affectedRows === 0) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ message: "User deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user", error });
  }
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await generateHash(password);
    const newUser = {
      name,
      email,
      password: hashedPassword,
    };
    const [result] = await User.create(newUser);
    newUser.id = result.insertId;
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await generateHash(password);
    const response = await User.update(id, {
      name,
      email,
      password: hashedPassword,
    });
    if (response.affectedRows === 0) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ message: "User updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update user", error });
  }
};
