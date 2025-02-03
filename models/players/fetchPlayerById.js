import { pool } from "../../db/index.js";

export default async function fetchPlayerById(id) {
  const poolInstance = await pool;
  const result = await poolInstance.query("SELECT * FROM players WHERE id=$1", [
    id,
  ]);
  return result.recordset;
}
