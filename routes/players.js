import express from "express";
import getPlayers from "../controllers/players/getPlayers.js";
import getPlayerById from "../controllers/players/getPlayersById.js";
import createPlayer from "../controllers/players/createPlayer.js";
import updatePlayerById from "../controllers/players/updatePlayerById.js";
import deletePlayerById from "../controllers/players/deletePlayerById.js";

const router = express.Router();

router.get("/", getPlayers);
router.get("/:id", getPlayerById);
router.post("/", createPlayer);
router.patch("/:id", updatePlayerById);
router.delete("/:id", deletePlayerById);

export default router;
