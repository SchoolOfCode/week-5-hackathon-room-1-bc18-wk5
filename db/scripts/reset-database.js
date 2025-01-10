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

    // create mapwinrate table
    // await pool.query(`
    //   CREATE TABLE player_map_winrate (
    //     id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    //     player_id INT NOT NULL,
    //     map_id INT NOT NULL,
    //     win_rate DECIMAL(5, 2),
    //     FOREIGN KEY (player_id) REFERENCES players (id) ON DELETE CASCADE,
    //     FOREIGN KEY (map_id) REFERENCES maps (id) ON DELETE CASCADE
    // `);

    // Seed the players table
    await pool.query(`
    INSERT INTO players (player_name, kda, favourite_weapon, best_map, average_winrate)
    VALUES 
        ('xX_Gap_Xx', 2.34, 'The Kerblamminator 4000', 'Custom Map', 70),
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

    // await pool.query(`
    //   INSERT INTO player_map_winrate (player_id, map_id, win_rate)
    //   VALUES
    //     (1, 1, 65.32), -- xX_Gap_Xx on Custom Map
    //     (1, 2, 72.45), -- xX_Gap_Xx on Badlands
    //     (1, 3, 78.12), -- xX_Gap_Xx on Dust II
    //     (1, 4, 60.23), -- xX_Gap_Xx on Valhalla
    //     (1, 5, 69.34), -- xX_Gap_Xx on Shipment
    //     (1, 6, 58.47), -- xX_Gap_Xx on Terminal
    //     (1, 7, 64.55), -- xX_Gap_Xx on Flower Garden
    //     (1, 8, 74.22), -- xX_Gap_Xx on Inferno
    //     (1, 9, 83.10), -- xX_Gap_Xx on Rust
    //     (1, 10, 79.45), -- xX_Gap_Xx on Kings Canyon
    //     (1, 11, 68.90), -- xX_Gap_Xx on Blood Covenant
    //     (1, 12, 57.30), -- xX_Gap_Xx on Potato Farm
    //     (1, 13, 66.70), -- xX_Gap_Xx on Hijacked
    //     (1, 14, 74.90), -- xX_Gap_Xx on Firing Range
    //     (1, 15, 80.25), -- xX_Gap_Xx on Mirage
    //     (1, 16, 71.44), -- xX_Gap_Xx on Nuke

    //     (2, 1, 54.10), -- mtrc on Custom Map
    //     (2, 2, 61.75), -- mtrc on Badlands
    //     (2, 3, 55.85), -- mtrc on Dust II
    //     (2, 4, 63.44), -- mtrc on Valhalla
    //     (2, 5, 60.12), -- mtrc on Shipment
    //     (2, 6, 70.35), -- mtrc on Terminal
    //     (2, 7, 58.10), -- mtrc on Flower Garden
    //     (2, 8, 65.90), -- mtrc on Inferno
    //     (2, 9, 62.45), -- mtrc on Rust
    //     (2, 10, 68.90), -- mtrc on Kings Canyon
    //     (2, 11, 71.25), -- mtrc on Blood Covenant
    //     (2, 12, 57.80), -- mtrc on Potato Farm
    //     (2, 13, 64.75), -- mtrc on Hijacked
    //     (2, 14, 62.15), -- mtrc on Firing Range
    //     (2, 15, 59.50), -- mtrc on Mirage
    //     (2, 16, 66.30), -- mtrc on Nuke

    //     (3, 1, 73.22), -- DJ Dolly Parton on Custom Map
    //     (3, 2, 77.33), -- DJ Dolly Parton on Badlands
    //     (3, 3, 85.12), -- DJ Dolly Parton on Dust II
    //     (3, 4, 68.45), -- DJ Dolly Parton on Valhalla
    //     (3, 5, 72.22), -- DJ Dolly Parton on Shipment
    //     (3, 6, 74.55), -- DJ Dolly Parton on Terminal
    //     (3, 7, 63.99), -- DJ Dolly Parton on Flower Garden
    //     (3, 8, 79.88), -- DJ Dolly Parton on Inferno
    //     (3, 9, 82.10), -- DJ Dolly Parton on Rust
    //     (3, 10, 75.60), -- DJ Dolly Parton on Kings Canyon
    //     (3, 11, 80.32), -- DJ Dolly Parton on Blood Covenant
    //     (3, 12, 77.75), -- DJ Dolly Parton on Potato Farm
    //     (3, 13, 65.80), -- DJ Dolly Parton on Hijacked
    //     (3, 14, 69.20), -- DJ Dolly Parton on Firing Range
    //     (3, 15, 90.45), -- DJ Dolly Parton on Mirage
    //     (3, 16, 66.10), -- DJ Dolly Parton on Nuke

    //     (4, 1, 80.14), -- Enraged_Midget on Custom Map
    //     (4, 2, 79.43), -- Enraged_Midget on Badlands
    //     (4, 3, 87.55), -- Enraged_Midget on Dust II
    //     (4, 4, 79.00), -- Enraged_Midget on Valhalla
    //     (4, 5, 85.20), -- Enraged_Midget on Shipment
    //     (4, 6, 82.10), -- Enraged_Midget on Terminal
    //     (4, 7, 78.90), -- Enraged_Midget on Flower Garden
    //     (4, 8, 75.65), -- Enraged_Midget on Inferno
    //     (4, 9, 73.35), -- Enraged_Midget on Rust
    //     (4, 10, 81.40), -- Enraged_Midget on Kings Canyon
    //     (4, 11, 76.25), -- Enraged_Midget on Blood Covenant
    //     (4, 12, 74.80), -- Enraged_Midget on Potato Farm
    //     (4, 13, 72.55), -- Enraged_Midget on Hijacked
    //     (4, 14, 78.90), -- Enraged_Midget on Firing Range
    //     (4, 15, 70.20), -- Enraged_Midget on Mirage
    //     (4, 16, 68.75), -- Enraged_Midget on Nuke

    //     (5, 1, 82.30), -- MachineHead99 on Custom Map
    //     (5, 2, 66.70), -- MachineHead99 on Badlands
    //     (5, 3, 75.90), -- MachineHead99 on Dust II
    //     (5, 4, 68.10), -- MachineHead99 on Valhalla
    //     (5, 5, 77.50), -- MachineHead99 on Shipment
    //     (5, 6, 63.80), -- MachineHead99 on Terminal
    //     (5, 7, 69.65), -- MachineHead99 on Flower Garden
    //     (5, 8, 72.40), -- MachineHead99 on Inferno
    //     (5, 9, 75.20), -- MachineHead99 on Rust
    //     (5, 10, 64.45), -- MachineHead99 on Kings Canyon
    //     (5, 11, 79.00), -- MachineHead99 on Blood Covenant
    //     (5, 12, 70.10), -- MachineHead99 on Potato Farm
    //     (5, 13, 73.80), -- MachineHead99 on Hijacked
    //     (5, 14, 71.45), -- MachineHead99 on Firing Range
    //     (5, 15, 85.75), -- MachineHead99 on Mirage
    //     (5, 16, 66.90), -- MachineHead99 on Nuke

    //     (6, 1, 77.60), -- Jackhamer on Custom Map
    //     (6, 2, 68.30), -- Jackhamer on Badlands
    //     (6, 3, 80.10), -- Jackhamer on Dust II
    //     (6, 4, 76.25), -- Jackhamer on Valhalla
    //     (6, 5, 71.30), -- Jackhamer on Shipment
    //     (6, 6, 74.90), -- Jackhamer on Terminal
    //     (6, 7, 70.20), -- Jackhamer on Flower Garden
    //     (6, 8, 79.40), -- Jackhamer on Inferno
    //     (6, 9, 73.90), -- Jackhamer on Rust
    //     (6, 10, 80.50), -- Jackhamer on Kings Canyon
    //     (6, 11, 72.75), -- Jackhamer on Blood Covenant
    //     (6, 12, 77.50), -- Jackhamer on Potato Farm
    //     (6, 13, 69.80), -- Jackhamer on Hijacked
    //     (6, 14, 65.30), -- Jackhamer on Firing Range
    //     (6, 15, 81.25), -- Jackhamer on Mirage
    //     (6, 16, 78.10)  -- Jackhamer on Nuke

    //     (7, 1, 73.50), -- Suede on Custom Map
    //   (7, 2, 79.40), -- Suede on Badlands
    //   (7, 3, 74.20), -- Suede on Dust II
    //   (7, 4, 81.50), -- Suede on Valhalla
    //   (7, 5, 72.60), -- Suede on Shipment
    //   (7, 6, 75.80), -- Suede on Terminal
    //   (7, 7, 70.90), -- Suede on Flower Garden
    //   (7, 8, 77.80), -- Suede on Inferno
    //   (7, 9, 71.30), -- Suede on Rust
    //   (7, 10, 74.10), -- Suede on Kings Canyon
    //   (7, 11, 78.30), -- Suede on Blood Covenant
    //   (7, 12, 70.80), -- Suede on Potato Farm
    //   (7, 13, 75.40), -- Suede on Hijacked
    //   (7, 14, 72.20), -- Suede on Firing Range
    //   (7, 15, 73.10), -- Suede on Mirage
    //   (7, 16, 75.00), -- Suede on Nuke

    //   (8, 1, 69.30), -- lukeuniverse on Custom Map
    //   (8, 2, 74.20), -- lukeuniverse on Badlands
    //   (8, 3, 79.60), -- lukeuniverse on Dust II
    //   (8, 4, 67.80), -- lukeuniverse on Valhalla
    //   (8, 5, 71.10), -- lukeuniverse on Shipment
    //   (8, 6, 76.40), -- lukeuniverse on Terminal
    //   (8, 7, 70.00), -- lukeuniverse on Flower Garden
    //   (8, 8, 80.30), -- lukeuniverse on Inferno
    //   (8, 9, 72.50), -- lukeuniverse on Rust
    //   (8, 10, 76.20), -- lukeuniverse on Kings Canyon
    //   (8, 11, 79.00), -- lukeuniverse on Blood Covenant
    //   (8, 12, 69.90), -- lukeuniverse on Potato Farm
    //   (8, 13, 72.00), -- lukeuniverse on Hijacked
    //   (8, 14, 75.10), -- lukeuniverse on Firing Range
    //   (8, 15, 70.80), -- lukeuniverse on Mirage
    //   (8, 16, 74.40), -- lukeuniverse on Nuke

    //   (9, 1, 74.30), -- Samus on Custom Map
    //   (9, 2, 70.40), -- Samus on Badlands
    //   (9, 3, 75.00), -- Samus on Dust II
    //   (9, 4, 69.10), -- Samus on Valhalla
    //   (9, 5, 77.80), -- Samus on Shipment
    //   (9, 6, 80.20), -- Samus on Terminal
    //   (9, 7, 74.70), -- Samus on Flower Garden
    //   (9, 8, 72.30), -- Samus on Inferno
    //   (9, 9, 79.10), -- Samus on Rust
    //   (9, 10, 68.40), -- Samus on Kings Canyon
    //   (9, 11, 71.60), -- Samus on Blood Covenant
    //   (9, 12, 76.50), -- Samus on Potato Farm
    //   (9, 13, 73.40), -- Samus on Hijacked
    //   (9, 14, 72.80), -- Samus on Firing Range
    //   (9, 15, 75.50), -- Samus on Mirage
    //   (9, 16, 77.90), -- Samus on Nuke

    //   (10, 1, 69.50), -- mrchickennoodles on Custom Map
    //   (10, 2, 74.90), -- mrchickennoodles on Badlands
    //   (10, 3, 72.40), -- mrchickennoodles on Dust II
    //   (10, 4, 70.00), -- mrchickennoodles on Valhalla
    //   (10, 5, 73.60), -- mrchickennoodles on Shipment
    //   (10, 6, 71.90), -- mrchickennoodles on Terminal
    //   (10, 7, 75.10), -- mrchickennoodles on Flower Garden
    //   (10, 8, 77.20), -- mrchickennoodles on Inferno
    //   (10, 9, 78.10), -- mrchickennoodles on Rust
    //   (10, 10, 74.60), -- mrchickennoodles on Kings Canyon
    //   (10, 11, 79.90), -- mrchickennoodles on Blood Covenant
    //   (10, 12, 76.70), -- mrchickennoodles on Potato Farm
    //   (10, 13, 72.20), -- mrchickennoodles on Hijacked
    //   (10, 14, 75.80), -- mrchickennoodles on Firing Range
    //   (10, 15, 73.50), -- mrchickennoodles on Mirage
    //   (10, 16, 71.80), -- mrchickennoodles on Nuke

    //   (11, 1, 71.20), -- Kragulus the Painbringer on Custom Map
    //   (11, 2, 70.80), -- Kragulus the Painbringer on Badlands
    //   (11, 3, 75.30), -- Kragulus the Painbringer on Dust II
    //   (11, 4, 67.40), -- Kragulus the Painbringer on Valhalla
    //   (11, 5, 78.00), -- Kragulus the Painbringer on Shipment
    //   (11, 6, 74.10), -- Kragulus the Painbringer on Terminal
    //   (11, 7, 79.40), -- Kragulus the Painbringer on Flower Garden
    //   (11, 8, 73.30), -- Kragulus the Painbringer on Inferno
    //   (11, 9, 71.50), -- Kragulus the Painbringer on Rust
    //   (11, 10, 77.60), -- Kragulus the Painbringer on Kings Canyon
    //   (11, 11, 69.80), -- Kragulus the Painbringer on Blood Covenant
    //   (11, 12, 76.40), -- Kragulus the Painbringer on Potato Farm
    //   (11, 13, 70.30), -- Kragulus the Painbringer on Hijacked
    //   (11, 14, 75.00), -- Kragulus the Painbringer on Firing Range
    //   (11, 15, 73.10), -- Kragulus the Painbringer on Mirage
    //   (11, 16, 74.00), -- Kragulus the Painbringer on Nuke

    //   (12, 1, 75.00), -- Kim Lida on Custom Map
    //   (12, 2, 72.80), -- Kim Lida on Badlands
    //   (12, 3, 74.30), -- Kim Lida on Dust II
    //   (12, 4, 70.60), -- Kim Lida on Valhalla
    //   (12, 5, 78.50), -- Kim Lida on Shipment
    //   (12, 6, 73.40), -- Kim Lida on Terminal
    //   (12, 7, 75.80), -- Kim Lida on Flower Garden
    //   (12, 8, 79.60), -- Kim Lida on Inferno
    //   (12, 9, 77.20), -- Kim Lida on Rust
    //   (12, 10, 73.90), -- Kim Lida on Kings Canyon
    //   (12, 11, 71.50), -- Kim Lida on Blood Covenant
    //   (12, 12, 74.80), -- Kim Lida on Potato Farm
    //   (12, 13, 77.00), -- Kim Lida on Hijacked
    //   (12, 14, 76.10), -- Kim Lida on Firing Range
    //   (12, 15, 75.30), -- Kim Lida on Mirage
    //   (12, 16, 78.00), -- Kim Lida on Nuke

    //   (13, 1, 72.20), -- Cheeselover69 on Custom Map
    //   (13, 2, 75.40), -- Cheeselover69 on Badlands
    //   (13, 3, 79.60), -- Cheeselover69 on Dust II
    //   (13, 4, 71.30), -- Cheeselover69 on Valhalla
    //   (13, 5, 77.80), -- Cheeselover69 on Shipment
    //   (13, 6, 74.10), -- Cheeselover69 on Terminal
    //   (13, 7, 79.50), -- Cheeselover69 on Flower Garden
    //   (13, 8, 73.40), -- Cheeselover69 on Inferno
    //   (13, 9, 75.10), -- Cheeselover69 on Rust
    //   (13, 10, 70.60), -- Cheeselover69 on Kings Canyon
    //   (13, 11, 78.30), -- Cheeselover69 on Blood Covenant
    //   (13, 12, 74.80), -- Cheeselover69 on Potato Farm
    //   (13, 13, 72.90), -- Cheeselover69 on Hijacked
    //   (13, 14, 75.60), -- Cheeselover69 on Firing Range
    //   (13, 15, 76.40), -- Cheeselover69 on Mirage
    //   (13, 16, 73.20), -- Cheeselover69 on Nuke

    //   (14, 1, 71.50), -- Bubble&Squeak on Custom Map
    //   (14, 2, 70.10), -- Bubble&Squeak on Badlands
    //   (14, 3, 74.80), -- Bubble&Squeak on Dust II
    //   (14, 4, 72.90), -- Bubble&Squeak on Valhalla
    //   (14, 5, 77.00), -- Bubble&Squeak on Shipment
    //   (14, 6, 73.50), -- Bubble&Squeak on Terminal
    //   (14, 7, 75.80), -- Bubble&Squeak on Flower Garden
    //   (14, 8, 71.40), -- Bubble&Squeak on Inferno
    //   (14, 9, 72.00), -- Bubble&Squeak on Rust
    //   (14, 10, 78.20), -- Bubble&Squeak on Kings Canyon
    //   (14, 11, 75.00), -- Bubble&Squeak on Blood Covenant
    //   (14, 12, 74.10), -- Bubble&Squeak on Potato Farm
    //   (14, 13, 72.60), -- Bubble&Squeak on Hijacked
    //   (14, 14, 70.90), -- Bubble&Squeak on Firing Range
    //   (14, 15, 75.30), -- Bubble&Squeak on Mirage
    //   (14, 16, 73.80), -- Bubble&Squeak on Nuke

    //   (15, 1, 75.90), -- DaFais on Custom Map
    //   (15, 2, 77.60), -- DaFais on Badlands
    //   (15, 3, 80.40), -- DaFais on Dust II
    //   (15, 4, 72.20), -- DaFais on Valhalla
    //   (15, 5, 78.90), -- DaFais on Shipment
    //   (15, 6, 79.20), -- DaFais on Terminal
    //   (15, 7, 75.80), -- DaFais on Flower Garden
    //   (15, 8, 74.50), -- DaFais on Inferno
    //   (15, 9, 79.00), -- DaFais on Rust
    //   (15, 10, 72.70), -- DaFais on Kings Canyon
    //   (15, 11, 77.40), -- DaFais on Blood Covenant
    //   (15, 12, 74.80), -- DaFais on Potato Farm
    //   (15, 13, 75.10), -- DaFais on Hijacked
    //   (15, 14, 72.00), -- DaFais on Firing Range
    //   (15, 15, 73.90), -- DaFais on Mirage
    //   (15, 16, 70.50), -- DaFais on Nuke

    //   (16, 1, 74.10), -- Ezee Ace on Custom Map
    //   (16, 2, 76.40), -- Ezee Ace on Badlands
    //   (16, 3, 79.20), -- Ezee Ace on Dust II
    //   (16, 4, 71.90), -- Ezee Ace on Valhalla
    //   (16, 5, 72.50), -- Ezee Ace on Shipment
    //   (16, 6, 75.30), -- Ezee Ace on Terminal
    //   (16, 7, 78.10), -- Ezee Ace on Flower Garden
    //   (16, 8, 74.80), -- Ezee Ace on Inferno
    //   (16, 9, 77.40), -- Ezee Ace on Rust
    //   (16, 10, 75.50), -- Ezee Ace on Kings Canyon
    //   (16, 11, 70.40), -- Ezee Ace on Blood Covenant
    //   (16, 12, 72.30), -- Ezee Ace on Potato Farm
    //   (16, 13, 75.20), -- Ezee Ace on Hijacked
    //   (16, 14, 71.00), -- Ezee Ace on Firing Range
    //   (16, 15, 73.50), -- Ezee Ace on Mirage
    //   (16, 16, 78.60), -- Ezee Ace on Nuke

    //   (17, 1, 70.30), -- Stryker on Custom Map
    //   (17, 2, 74.90), -- Stryker on Badlands
    //   (17, 3, 77.40), -- Stryker on Dust II
    //   (17, 4, 72.70), -- Stryker on Valhalla
    //   (17, 5, 75.20), -- Stryker on Shipment
    //   (17, 6, 76.10), -- Stryker on Terminal
    //   (17, 7, 78.80), -- Stryker on Flower Garden
    //   (17, 8, 72.60), -- Stryker on Inferno
    //   (17, 9, 75.90), -- Stryker on Rust
    //   (17, 10, 78.20), -- Stryker on Kings Canyon
    //   (17, 11, 71.40), -- Stryker on Blood Covenant
    //   (17, 12, 74.00), -- Stryker on Potato Farm
    //   (17, 13, 73.90), -- Stryker on Hijacked
    //   (17, 14, 70.80), -- Stryker on Firing Range
    //   (17, 15, 72.30), -- Stryker on Mirage
    //   (17, 16, 75.60); -- Stryker on Nuke
    // `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
