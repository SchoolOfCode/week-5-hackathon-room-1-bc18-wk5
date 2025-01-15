import fetchAllPlayers from "../../models/players/fetchAllPlayers.js";

export default async function sortByHeading(req, res) {
  try {
    const { player_name, kd, favourite_weapon, best_map, average_winrate } =
      req.query;
    const players = await fetchAllPlayers({
      player_name,
      kd,
      favourite_weapon,
      best_map,
      average_winrate,
    });
    res.status(200).json({ status: "success", data: players });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
