import insertMap from "../../models/maps/insertMap.js";

export default async function createMap(req, res) {
  try {
    const { map_name } = req.body;
    if (!map_name) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const Map = await insertMap(map_name);
    res.status(201).json({ status: "success", data: Map });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
