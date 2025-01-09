import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS maps CASCADE;
      DROP TABLE IF EXISTS players CASCADE;
    `);

    // Create the players table
    await pool.query(`
      CREATE TABLE players (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        player_name VARCHAR(255) NOT NULL,
        kda DECIMAL(5, 2),
        favourite_weapon VARCHAR(255),
        best_map VARCHAR(255),
        average_windrate DECIMAL(5, 2)
      );
    `);

    // Create the maps table
    await pool.query(`
      CREATE TABLE maps (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        map_name VARCHAR(255) NOT NULL,
        description TEXT
      );
    `);

    // Seed the players table
    await pool.query(`
      INSERT INTO players (player_name, kda, favourite_weapon, best_map, average_windrate)
      VALUES 
        ('PlayerOne', 2.45, 'Sniper', 'Dust II', 55.00),
        ('PlayerTwo', 1.85, 'Rifle', 'Inferno', 48.50),
        ('PlayerThree', 3.10, 'SMG', 'Mirage', 72.30),
        ('PlayerFour', 2.00, 'Shotgun', 'Nuke', 60.00);
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
