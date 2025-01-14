import modifyPlayerLoss from "../../models/players/modifyPlayerLoss.js";

export default async function updatePlayerLoss(req, res) {
  try {
    const id = req.params.id;
    const loser = await modifyPlayerLoss(id);
    res.status(200).json({ status: "success", data: loser });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
