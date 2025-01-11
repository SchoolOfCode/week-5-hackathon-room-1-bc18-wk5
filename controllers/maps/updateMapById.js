import modifyMapById from "../../models/maps/modifyMapById.js";

export default async function updateMapById(req, res) {
  try {
    const id = req.params.id;
    const { map_name } = req.body;
    if (!map_name) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const map = await modifyMapById(id, map_name);
    if (!map) {
      return res.status(404).json({ status: "fail", message: "Map not found" });
    }
    res.status(200).json({ status: "success", data: Map });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
