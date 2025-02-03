import { pool } from "../../db/index.js";

export default async function fetchAllPlayers({
  player_name,
  favourite_weapon,
  best_map,
}) {
  let query = "SELECT * FROM players";
  const params = [];
  if (player_name || favourite_weapon || best_map) {
    query += " WHERE ";
    if (player_name) {
      params.push(player_name);
      (query += " player_name = $1"), [params.length];
    }
    if (favourite_weapon) {
      params.push(favourite_weapon);
      (query += " favourite_weapon = $1"), [params.length];
    }
    if (best_map) {
      params.push(best_map);
      (query += " best_map = $1"), [params.length];
    }
  }
  const poolInstance = await pool;
  const result = await poolInstance.query(query, params);
  return result.recordset;
}
