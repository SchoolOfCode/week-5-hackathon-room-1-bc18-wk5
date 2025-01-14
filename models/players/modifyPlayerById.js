import { pool } from "../../db/index.js";

export default async function modifyPlayerById(
  id,
  player_name,
  favourite_weapon,
  best_map
) {
  const result = await pool.query(
    "UPDATE players SET player_name = $1, favourite_weapon = $2, best_map = $3,  WHERE id = $4 RETURNING *",
    [player_name, favourite_weapon, best_map, id]
  );
  return result.rows;
}
