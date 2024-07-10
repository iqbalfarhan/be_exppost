import db from "../config/database.js";

export const get = () => {
  return db.query("SELECT * FROM posts");
};

export const find = (id) => {
  return db.query("SELECT * FROM posts WHERE id = ?", [id]);
};

export const findOne = async (conditions) => {
  const [results] = await where(conditions);
  return results.length > 0 ? results[0] : undefined;
};

export const where = (conditions) => {
  const keys = Object.keys(conditions);
  const values = Object.values(conditions);
  const query = `SELECT * FROM posts WHERE ${keys
    .map((key) => `${key} = ?`)
    .join(" AND ")}`;
  return db.query(query, values);
};

export const create = ({ title, body, user_id }) => {
  return db.query("INSERT INTO posts (title, body, user_id) VALUES (?, ?, ?)", [
    title,
    body,
    user_id,
  ]);
};

export const update = (id, { title, body, user_id }) => {
  return db.query(
    "UPDATE posts SET title = ?, body = ?, user_id = ? WHERE id = ?",
    [title, body, user_id, id],
  );
};

export const destroy = (id) => {
  return db.query("DELETE FROM posts WHERE id = ?", [id]);
};
