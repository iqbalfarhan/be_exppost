import * as Post from "../models/post.model.js";
import * as User from "../models/user.model.js";

export const getPosts = async (req, res) => {
  try {
    const [results] = await Post.get();

    const posts = await Promise.all(
      results.map(async (post) => {
        const { user_id, ...postData } = post;
        const [user] = await User.find(user_id);

        return {
          ...postData,
          user,
        };
      }),
    );

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts", error });
  }
};

export const findPost = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await Post.find(id);
    if (results.length === 0) {
      res.status(404).json({ message: "Post not found" });
    } else {
      res.status(200).json(results[0]);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to find post", error });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await Post.destroy(id);
    if (results.affectedRows === 0) {
      res.status(404).json({ message: "Post not found" });
    } else {
      res.status(200).json({ message: "Post deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete post", error });
  }
};

export const createPost = async (req, res) => {
  const { title, body, user_id } = req.body;

  try {
    const newPost = {
      title,
      body,
      user_id,
    };
    const [result] = await Post.create(newPost);
    newPost.id = result.insertId;
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await Post.update(id, req.body);
    if (response.affectedRows === 0) {
      res.status(404).json({ message: "Post not found" });
    } else {
      res.status(200).json({ message: "Post updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update post", error });
  }
};
