import fetchMapById from "../../models/maps/fetchMapsById.js";

export default async function getMapById(req, res) {
  try {
    const id = req.params.id;
    const Map = await fetchMapById(id);
    if (!Map) {
      return res.status(404).json({ status: "fail", message: "Map not found" });
    }
    res.status(200).json({ status: "success", data: Map });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
