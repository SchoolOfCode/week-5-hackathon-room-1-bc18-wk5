import { pool } from "../../db/index.js";

export default async function fetchAllMaps() {
  const result = await pool.query("SELECT * FROM maps");
  return result.rows;
}
