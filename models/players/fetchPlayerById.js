import { pool } from "../../db/index.js";

export default async function fetchPlayerById(id) {
  const result = await pool.query("SELECT * FROM players WHERE id=$1", [id]);
  return result.rows;
}
