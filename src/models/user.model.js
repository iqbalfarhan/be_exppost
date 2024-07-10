import db from "../config/database.js";

export const get = () => {
  return db.query("SELECT * FROM users");
};

export const find = (id) => {
  return db.query("SELECT * FROM users WHERE id = ?", [id]);
};

export const findOne = async (conditions) => {
  const [results] = await where(conditions);
  return results.length > 0 ? results[0] : undefined;
};

export const where = (conditions) => {
  const keys = Object.keys(conditions);
  const values = Object.values(conditions);
  const query = `SELECT * FROM users WHERE ${keys
    .map((key) => `${key} = ?`)
    .join(" AND ")}`;
  return db.query(query, values);
};

export const create = ({ name, email, password }) => {
  return db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
  );
};

export const update = (id, { name, email, password }) => {
  return db.query(
    "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?",
    [name, email, password, id],
  );
};

export const destroy = (id) => {
  return db.query("DELETE FROM users WHERE id = ?", [id]);
};
