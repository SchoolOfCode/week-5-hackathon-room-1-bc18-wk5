import { pool } from "../../db/index.js";

export default async function removePlayerById(id) {
  const result = await pool.query("DELETE FROM players WHERE id = $1", [id]);
  return result.rows;
}
