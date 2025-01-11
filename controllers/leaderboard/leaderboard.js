import { fetchLeaderboard } from "../../models/leaderboard/leaderboard.js";

export async function getLeaderboard(req, res) {
  try {
    const leaderBoard = await fetchLeaderboard();
    res.status(200).json({ status: "success", data: leaderBoard });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
