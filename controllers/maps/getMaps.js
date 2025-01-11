import fetchAllMaps from "../../models/maps/fetchAllMaps.js";

export default async function getMaps(req, res) {
  try {
    const Maps = await fetchAllMaps();
    res.status(200).json({ status: "success", data: Maps });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
