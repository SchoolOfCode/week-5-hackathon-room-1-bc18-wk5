import express from "express";
import { getLeaderboard } from "../controllers/leaderboard/leaderboard.js";

const router = express.Router();

router.get("/", getLeaderboard);

export default router;
