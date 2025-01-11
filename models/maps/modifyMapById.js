import { pool } from "../../db/index.js";

export default async function modifyMapById(id, map_name) {
  const result = await pool.query(
    "UPDATE maps SET map_name = $1 WHERE id = $2 ",
    [map_name, id]
  );
  return result.rows;
}
