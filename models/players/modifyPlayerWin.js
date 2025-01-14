import { pool } from "../../db/index.js";

export default async function modifyPlayerWin(id) {
  const result = await pool.query(
    "UPDATE players SET wins = COALESCE(wins, 0) + 1 WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows;
}