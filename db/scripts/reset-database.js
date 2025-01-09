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
        average_winrate DECIMAL(5, 2)
      );
    `);

    // Create the maps table
    await pool.query(`
      CREATE TABLE maps (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        map_name VARCHAR(255) NOT NULL
      );
    `);

    // Seed the players table
    await pool.query(`
  INSERT INTO players (player_name, kda, favourite_weapon, best_map, average_winrate)
  VALUES 
    ('xX_Gap_Xx', 2.34, 'The Kerblamminator 4000', 'Custom Map', 67.89),
    ('mtrc', 1.76, 'Scout Shotgun', 'Badlands', 55.42),
    ('DJ Dolly Parton', 2.81, 'M4A1-S', 'Dust II', 61.37),
    ('Enraged_Midget', 3.25, 'Halo Reach - Battle Rifle', 'Valhalla', 72.11),
    ('MachineHead99', 1.95, 'RPG', 'Shipment', 48.66),
    ('Jackhamer', 2.43, 'AS VAL', 'Terminal', 57.98),
    ('Suede', 1.25, 'a flower', 'Flower Garden', 33.67),
    ('lukeuniverse', 3.02, 'AK-47', 'Mirage', 74.28),
    ('Samus', 2.88, 'Intervention (MW2)', 'Rust', 69.47),
    ('mrchickennoodles', 1.94, 'R-301', 'Kings Canyon', 52.34),
    ('Kragulus the Painbringer', 2.10, 'I prefer knives', 'Inferno', 60.45),
    ('Kim Lida', 3.56, 'Railgun - Quake Champions', 'Blood Covenant', 75.20),
    ('Cheeselover69', 1.30, 'Spud Gun', 'Potato Farm', 41.99),
    ('Bubble&Squeak', 2.18, 'Shotgun', 'Nuke', 56.78),
    ('DaFais', 2.65, 'Rocket Launcher', 'Dust II', 63.12),
    ('Ezee Ace', 3.45, 'MSMC (BO2)', 'Hijacked', 71.88),
    ('Stryker', 2.74, 'Glock', 'Hanger', 68.55);
`);

    await pool.query(`
    INSERT INTO maps (map_name)
    VALUES 
        ('Custom Map'),
        ('Badlands'),
        ('Valhalla'),
        ('Shipment'),
        ('Terminal'),
        ('Flower Garden'),
        ('Mirage'),
        ('Rust'),
        ('Kings Canyon'),
        ('Inferno'),
        ('Blood Covenant'),
        ('Potato Farm'),
        ('Nuke'),
        ('Dust II'),
        ('Hijacked'),
        ('Hanger')
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
