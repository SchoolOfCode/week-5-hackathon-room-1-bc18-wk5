import { pool } from "../../db/index.js";

export async function fetchLeaderboard() {
  const result = await pool.query(
    "SELECT player_name, average_winrate FROM players ORDER BY average_winrate DESC"
  );
  return result.rows;
}
