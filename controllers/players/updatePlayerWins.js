import modifyPlayerWin from "../../models/players/modifyPlayerWin.js";

export default async function updatePlayerWins(req, res) {
  
  try {
    const id = req.params.id;
    const winner = await modifyPlayerWin(id)
    res.status(200).json({ status: "success" , data: winner });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
