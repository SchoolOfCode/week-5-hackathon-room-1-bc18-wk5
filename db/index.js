import sql from "mssql";
import "dotenv/config"; // Loads environment variables from .env

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT, 10) || 1433,
  database: process.env.DB_NAME,
  options: {
    encrypt: process.env.DB_ENCRYPT === "true", // Convert string to boolean
    trustServerCertificate: process.env.DB_TRUST_CERT === "true",
  },
};

// Validate required config values
if (
  !dbConfig.server ||
  !dbConfig.user ||
  !dbConfig.password ||
  !dbConfig.database
) {
  console.error("❌ Missing database configuration. Check your .env file.");
  process.exit(1);
}

// Create a connection pool
export const pool = new sql.ConnectionPool(dbConfig)
  .connect()
  .then((pool) => {
    console.log("✅ Connected to SQL Server");
    return pool;
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  });
