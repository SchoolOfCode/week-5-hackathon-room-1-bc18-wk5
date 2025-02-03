import { pool } from "../../db/index.js";

export default async function fetchAllMaps() {
  const poolInstance = await pool;
  const result = await poolInstance.query("SELECT * FROM maps");
  return result.recordset;
}
