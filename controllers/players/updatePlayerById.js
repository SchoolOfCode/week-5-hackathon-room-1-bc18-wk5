import modifyPlayerById from "../../models/players/modifyPlayerById.js";

export default async function updatePlayerById(req, res) {
  try {
    const id = req.params.id;
    const { player_name, kda, favourite_weapon, best_map, average_winrate } =
      req.body;
    if (
      !player_name ||
      !kda ||
      !favourite_weapon ||
      !best_map ||
      !average_winrate
    ) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const player = await modifyPlayerById(
      id,
      player_name,
      kda,
      favourite_weapon,
      best_map,
      average_winrate
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
