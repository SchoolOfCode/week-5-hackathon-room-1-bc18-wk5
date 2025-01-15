import fetchByHeading from "../../models/players/fetchByHeading.js";

export default async function sortByHeading(req, res) {
  try {
    const {
      player_name,
      kda,
      favourite_weapon,
      best_map,
      average_winrate,
      direction,
    } = req.query;
    const players = await fetchByHeading({
      player_name: player_name === "true",
      kda: kda === "true",
      favourite_weapon: favourite_weapon === "true",
      best_map: best_map === "true",
      average_winrate: average_winrate === "true",
      direction,
    });
    res.status(200).json({ status: "success", data: players });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
