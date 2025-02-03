import { pool } from "../../db/index.js";

export default async function insertPlayer(
  player_name,
  favourite_weapon,
  best_map
) {
  const poolInstance = await pool;
  const result = await poolInstance.query(
    "INSERT INTO players (player_name, favourite_weapon, best_map) VALUES ($1, $2, $3)",
    [player_name, favourite_weapon, best_map]
  );
  return result.recordset;
}
