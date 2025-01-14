import insertPlayer from "../../models/players/insertPlayer.js";

export default async function createPlayer(req, res) {
  try {
    const { player_name, favourite_weapon, best_map } = req.body;
    if (!player_name || !favourite_weapon || !best_map) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const player = await insertPlayer(player_name, favourite_weapon, best_map);
    res.status(201).json({ status: "success", data: player });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
