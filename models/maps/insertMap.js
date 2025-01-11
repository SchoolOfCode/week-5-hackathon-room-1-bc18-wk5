import { pool } from "../../db/index.js";

export default async function insertMap(map_name) {
  const result = await pool.query("INSERT INTO maps (map_name) VALUES ($1)", [
    map_name,
  ]);
  return result.rows;
}
