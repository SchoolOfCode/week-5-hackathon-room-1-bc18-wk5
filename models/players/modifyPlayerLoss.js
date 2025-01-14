import { pool } from "../../db/index.js";

export default async function modifyPlayerLoss(id) {
  const result = await pool.query(
    "UPDATE players SET losses = COALESCE(losses, 0) + 1 WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows;
}
