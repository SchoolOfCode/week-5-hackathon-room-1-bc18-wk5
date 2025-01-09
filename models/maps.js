import { pool } from "../db/index.js";

export async function fetchAllMaps() {
  const result = await pool.query("SELECT * FROM maps");
  return result.rows;
}

export async function fetchMapById(id) {
  const result = await pool.query("SELECT * FROM maps WHERE id = $1", [id]);
  return result.rows;
}

export async function insertMap(map_name) {
  const result = await pool.query("INSERT INTO maps (map_name) VALUES ($1)", [
    map_name,
  ]);
  return result.rows;
}

export async function modifyMapById(id, map_name) {
  const result = await pool.query(
    "UPDATE maps SET map_name = $1 WHERE id = $2 ",
    [map_name, id]
  );
  return result.rows;
}

export async function removeMapById(id) {
  const result = await pool.query("DELETE from maps WHERE id = $1", [id]);
  return result.rows;
}
