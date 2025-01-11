import removePlayerById from "../../models/players/removePlayerById.js";

export default async function deletePlayerById(req, res) {
  try {
    const id = req.params.id;
    const player = await removePlayerById(id);
    if (!player) {
      return res
        .status(404)
        .json({ status: "fail", message: "Player not found" });
    }
    res.status(204).send(); // 204 No Content
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
