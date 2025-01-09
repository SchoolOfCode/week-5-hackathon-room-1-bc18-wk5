import express from "express";
import {
  getMaps,
  getMapById,
  createMap,
  updateMapById,
  deleteMapById,
} from "../controllers/maps.js";

const router = express.Router();

router.get("/", getMaps);
router.get("/:id", getMapById);
router.post("/", createMap);
router.patch("/:id", updateMapById);
router.delete("/:id", deleteMapById);

export default router;
