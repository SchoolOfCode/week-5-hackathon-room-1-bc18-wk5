import { pool } from "../../db/index.js";

export default async function removeMapById(id) {
  const result = await pool.query("DELETE from maps WHERE id = $1", [id]);
  return result.rows;
}
