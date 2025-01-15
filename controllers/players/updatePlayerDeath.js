import modifyPlayerDeath from "../../models/players/modifyPlayerDeath.js";

export default async function updatePlayerDeath(req, res) {
  try {
    const id = req.params.id;
    const killer = await modifyPlayerDeath(id);
    res.status(200).json({ status: "success", data: killer });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
