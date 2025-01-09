import {
  fetchAllMaps,
  fetchMapById,
  insertMap,
  modifyMapById,
  removeMapById,
} from "../models/maps.js";

export async function getMaps(req, res) {
  try {
    const Maps = await fetchAllMaps();
    res.status(200).json({ status: "success", data: Maps });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function getMapById(req, res) {
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

export async function createMap(req, res) {
  try {
    const { first_name, last_name } = req.body;
    if (!first_name || !last_name) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const Map = await insertMap(first_name, last_name);
    res.status(201).json({ status: "success", data: Map });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function updateMapById(req, res) {
  try {
    const id = req.params.id;
    const { first_name, last_name } = req.body;
    if (!first_name || !last_name) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const Map = await modifyMapById(id, first_name, last_name);
    if (!Map) {
      return res.status(404).json({ status: "fail", message: "Map not found" });
    }
    res.status(200).json({ status: "success", data: Map });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function deleteMapById(req, res) {
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
