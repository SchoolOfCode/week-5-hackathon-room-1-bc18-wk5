import { pool } from "../../db/index.js";

export default async function fetchMapById(id) {
  const poolInstance = await pool;
  const result = await poolIntance.query("SELECT * FROM maps WHERE id = $1", [
    id,
  ]);
  return result.recordset;
}
