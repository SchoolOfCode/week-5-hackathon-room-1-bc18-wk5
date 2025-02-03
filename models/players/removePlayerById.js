import { pool } from "../../db/index.js";

export default async function removePlayerById(id) {
  const poolInstance = await pool;
  const result = await poolInstance.query("DELETE FROM players WHERE id = $1", [
    id,
  ]);
  return result.recordset;
}
