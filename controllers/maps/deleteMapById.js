import removeMapById from "../../models/maps/removeMapById.js";

export default async function deleteMapById(req, res) {
  try {
    const id = req.params.id;
    const Map = await removeMapById(id);
    if (!Map) {
      return res.status(404).json({ status: "fail", message: "Map not found" });
    }
    res.status(204).send(); // 204 No Content
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
