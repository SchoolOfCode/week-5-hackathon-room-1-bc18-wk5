import { pool } from "../../db/index.js";

export default async function fetchByHeading({
  player_name,
  kd,
  favourite_weapon,
  best_map,
  average_winrate,
  direction = "ASC",
}) {
  let query = "SELECT * FROM players";
  const orderClauses = [];

  if (player_name) {
    orderClauses.push("player_name");
  }
  if (kd) {
    orderClauses.push("kd");
  }
  if (favourite_weapon) {
    orderClauses.push("favourite_weapon");
  }
  if (best_map) {
    orderClauses.push("best_map");
  }
  if (average_winrate) {
    orderClauses.push("average_winrate");
  }

  if (orderClauses.length > 0) {
    query += " ORDER BY " + orderClauses.join(", ") + " " + direction;
  }

  try {
    const poolInstance = await pool;
    const result = await poolInstance.query(query);
    return result.recordset;
  } catch (error) {
    throw new Error(error.message);
  }
}
