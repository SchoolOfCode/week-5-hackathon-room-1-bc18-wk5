import express from "express";
import getPlayers from "../controllers/players/getPlayers.js";
import getPlayerById from "../controllers/players/getPlayersById.js";
import createPlayer from "../controllers/players/createPlayer.js";
import updatePlayerById from "../controllers/players/updatePlayerById.js";
import deletePlayerById from "../controllers/players/deletePlayerById.js";
import updatePlayerWins from "../controllers/players/updatePlayerWins.js";
import updatePlayerLoss from "../controllers/players/updatePlayerLoss.js";
import updatePlayerKill from "../controllers/players/updatePlayerKill.js";
import updatePlayerDeath from "../controllers/players/updatePlayerDeath.js";

const router = express.Router();

router.get("/", getPlayers);
router.get("/:id", getPlayerById);
router.post("/", createPlayer);
router.patch("/:id", updatePlayerById);
router.patch("/win/:id", updatePlayerWins);
router.patch("/loss/:id", updatePlayerLoss);
router.patch("/kill/:id", updatePlayerKill);
router.patch("/death/:id", updatePlayerDeath);
router.delete("/:id", deletePlayerById);

export default router;
