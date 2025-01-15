import { pool } from "../../db/index.js";

export default async function modifyPlayerKill(id) {
  try {
    const result = await pool.query(
      "UPDATE players SET kills = COALESCE(wins, 0) + 1 WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      throw new Error("Player not found");
    }

    return result.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}
