import { pool } from "../../db/index.js";

export default async function fetchMapById(id) {
  const result = await pool.query("SELECT * FROM maps WHERE id = $1", [id]);
  return result.rows;
}
