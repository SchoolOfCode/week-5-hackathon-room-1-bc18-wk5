import { pool } from "../../db/index.js";

export default async function modifyPlayerWin(id) {
  const poolInstance = await pool;
  try {
    const result = await poolInstance.query(
      "UPDATE players SET wins = COALESCE(wins, 0) + 1 WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      throw new Error("Player not found");
    }

    // Calculate and update average_winrate
    const updateWinrateResult = await pool.query(
      `UPDATE players 
       SET average_winrate = (wins::float / (wins + losses) * 100) 
       WHERE id = $1 
       RETURNING *`,
      [id]
    );

    return updateWinrateResult.recordset[0];
  } catch (error) {
    throw new Error(error.message);
  }
}
