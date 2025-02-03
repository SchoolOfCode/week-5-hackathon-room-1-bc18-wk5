import { pool } from "../../db/index.js";

export default async function insertMap(map_name) {
  const poolInstance = await pool;
  const result = await poolInstance.query(
    "INSERT INTO maps (map_name) VALUES ($1)",
    [map_name]
  );
  return result.recordset;
}
