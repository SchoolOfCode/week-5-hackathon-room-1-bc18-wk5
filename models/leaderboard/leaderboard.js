import { pool } from "../../db/index.js";

export async function fetchLeaderboard() {
  const poolInstance = await pool;
  const result = await poolInstance
    .request()
    .query(
      "SELECT player_name, average_winrate FROM players ORDER BY average_winrate DESC"
    );

  return result.recordset;
}
