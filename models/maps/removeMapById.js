import { pool } from "../../db/index.js";

export default async function removeMapById(id) {
  const poolInstance = await pool;
  const result = await poolInstance.query("DELETE from maps WHERE id = $1", [
    id,
  ]);
  return result.recordset;
}
