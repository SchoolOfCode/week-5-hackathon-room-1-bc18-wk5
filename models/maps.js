import { pool } from "../db/index.js";

export async function fetchAllMaps() {
  const result = await pool.query();
}

export async function fetchMapById() {}

export async function insertMap() {}

export async function modifyMapById() {}

export async function removeMapById() {}
