import { pool } from "../db/index.js";

export async function fetchAllPlayers({
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
export async function fetchPlayerById(id) {
  const result = await pool.query("SELECT * FROM players WHERE id=$1", [id]);
  return result.rows;
}

export async function insertPlayer(
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

export async function modifyPlayerById(
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
export async function removePlayerById(id) {
  const result = await pool.query("DELETE FROM players WHERE id = $1", [id]);
  return result.rows;
}
