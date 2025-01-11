import { pool } from "../../db/index.js";

export default async function modifyPlayerById(
  id,
  player_name,
  kda,
  favourite_weapon,
  best_map,
  average_winrate
) {
  const result = await pool.query(
    "UPDATE players SET player_name = $1, kda = $2, favourite_weapon = $3, best_map = $4, average_winrate = $5 WHERE id = $6 RETURNING *",
    [player_name, kda, favourite_weapon, best_map, average_winrate, id]
  );
  return result.rows;
}
