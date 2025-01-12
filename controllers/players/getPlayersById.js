import fetchPlayerById from "../../models/players/fetchPlayerById.js";

export default async function getPlayerById(req, res) {
  try {
    const id = req.params.id;
    const player = await fetchPlayerById(id);
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
