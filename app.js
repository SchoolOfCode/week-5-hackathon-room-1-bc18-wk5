// Import the required modules
import express from "express";
import morgan from "morgan";

import playerRouter from "./routes/players.js";
import mapRouter from "./routes/maps.js";
import lbRouter from "./routes/leaderboard.js";

// Initialize the express app
const app = express();

// Middleware
app.use(morgan("dev")); // Morgan is used for logging HTTP requests to the console in a developer-friendly format
app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

// Use sub-routers
app.use("/players", playerRouter);
app.use("/maps", mapRouter);
app.use("/leaderboard", lbRouter);

export default app;
