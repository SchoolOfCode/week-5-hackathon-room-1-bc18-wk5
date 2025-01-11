import express from "express";
import getMaps from "../controllers/maps/getMaps.js";
import getMapById from "../controllers/maps/getMapById.js";
import createMap from "../controllers/maps/createMap.js";
import updateMapById from "../controllers/maps/updateMapById.js";
import deleteMapById from "../controllers/maps/deleteMapById.js";

const router = express.Router();

router.get("/", getMaps);
router.get("/:id", getMapById);
router.post("/", createMap);
router.patch("/:id", updateMapById);
router.delete("/:id", deleteMapById);

export default router;
