import { pool } from "../../db/index.js";

export default async function modifyPlayerWin(id, wins, losses) {
  const result = await pool.query(
    "UPDATE players SET wins = $1 WHERE id = $2 RETURNING *",
    [wins, id]
  );
  return result.rows;
}
