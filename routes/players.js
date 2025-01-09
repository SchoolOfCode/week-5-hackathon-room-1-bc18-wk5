import express from "express";
import {
  getPlayers,
  getPlayerById,
  createPlayer,
  updatePlayerById,
  deletePlayerById,
} from "../controllers/players.js";

const router = express.Router();

router.get("/", getPlayers);
router.get("/:id", getPlayerById);
router.post("/", createPlayer);
router.patch("/:id", updatePlayerById);
router.delete("/:id", deletePlayerById);

export default router;
