import { fetchLeaderboard } from "../models/leaderboard.js";

export async function getLeaderboard(req, res) {
  try {
    const Players = await fetchLeaderboard();
    res.status(200).json({ status: "success", data: Players });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
