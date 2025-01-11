import { pool } from "../../db/index.js";

export default async function fetchAllPlayers({
  player_name,
  kda,
  favourite_weapon,
  best_map,
  average_winrate,
}) {
  let query = "SELECT * FROM players";
  const params = [];
  if (player_name || kda || favourite_weapon || best_map || average_winrate) {
    query += " WHERE ";
    if (player_name) {
      params.push(player_name);
      (query += " player_name = $1"), [params.length];
    }
    if (kda) {
      params.push(kda);
      query += " kda = $${params.length}";
    }
    if (favourite_weapon) {
      params.push(favourite_weapon);
      (query += " favourite_weapon = $1"), [params.length];
    }
    if (best_map) {
      params.push(best_map);
      (query += " best_map = $1"), [params.length];
    }
    if (average_winrate) {
      params.push(average_winrate);
      (query += " average_winrate = $1"), [params.length];
    }
  }
  const result = await pool.query(query, params);
  return result.rows;
}
