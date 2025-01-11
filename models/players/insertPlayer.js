import { pool } from "../../db/index.js";

export default async function insertPlayer(
  player_name,
  kda,
  favourite_weapon,
  best_map,
  average_winrate
) {
  const result = await pool.query(
    "INSERT INTO players (player_name, kda, favourite_weapon, best_map, average_winrate) VALUES ($1, $2, $3, $4, $5)",
    [player_name, kda, favourite_weapon, best_map, average_winrate]
  );
  return result.rows;
}
