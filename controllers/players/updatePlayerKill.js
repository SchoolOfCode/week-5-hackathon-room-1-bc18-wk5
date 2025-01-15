import modifyPlayerKill from "../../models/players/modifyPlayerKill.js";

export default async function updatePlayerKill(req, res) {
  try {
    const id = req.params.id;
    const killer = await modifyPlayerKill(id);
    res.status(200).json({ status: "success", data: killer });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
