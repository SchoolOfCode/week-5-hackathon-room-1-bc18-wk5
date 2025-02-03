import { pool } from "../../db/index.js";

export default async function modifyMapById(id, map_name) {
  const poolInstance = await pool;
  const result = await poolInstance.query(
    "UPDATE maps SET map_name = $1 WHERE id = $2 ",
    [map_name, id]
  );
  return result.recordset;
}
