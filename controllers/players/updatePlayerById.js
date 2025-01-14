import modifyPlayerById from "../../models/players/modifyPlayerById.js";

export default async function updatePlayerById(req, res) {
  try {
    const id = req.params.id;
    const { player_name, favourite_weapon, best_map } = req.body;
    if (!player_name || !favourite_weapon || !best_map) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const player = await modifyPlayerById(
      id,
      player_name,
      favourite_weapon,
      best_map
    );
    if (!player) {
      return res
        .status(404)
        .json({ status: "fail", message: "Player not found" });
    }
    res.status(200).json({ status: "success", data: player });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
