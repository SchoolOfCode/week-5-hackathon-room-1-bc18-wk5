import { pool } from "../../db/index.js";

export default async function modifyPlayerKill(id) {
  const poolInstance = await pool;
  try {
    const result = await poolInstance.query(
      "UPDATE players SET kills = kills + 1 WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      throw new Error("Player not found");
    }

    return result.recordset[0]; // Return the updated player object
  } catch (error) {
    throw new Error(error.message);
  }
}
