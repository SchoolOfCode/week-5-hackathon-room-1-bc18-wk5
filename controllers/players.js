import {
  fetchAllPlayers,
  fetchPlayerById,
  insertPlayer,
  modifyPlayerById,
  removePlayerById,
} from "../models/players.js";

export async function getPlayers(req, res) {
  try {
    const {player_name, kda, favourite_weapon, best_map, average_winrate} = req.query
    const players = await fetchAllPlayers({player_name, kda, favourite_weapon, best_map, average_winrate});
    res.status(200).json({ status: "success", data: players });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function getPlayerById(req, res) {
  try {
    const id = req.params.id;
    const Player = await fetchPlayerById(id);
    if (!Player) {
      return res
        .status(404)
        .json({ status: "fail", message: "Player not found" });
    }
    res.status(200).json({ status: "success", data: Player });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function createPlayer(req, res) {
  try {
    const {player_name, kda, favourite_weapon, best_map, average_winrate} = req.body;
    if (!player_name || !kda || !favourite_weapon || !best_map || !average_winrate) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const player = await insertPlayer(player_name, kda, favourite_weapon, best_map, average_winrate);
    res.status(201).json({ status: "success", data: player});
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function updatePlayerById(req, res) {
  try {
    const id = req.params.id;
    const { first_name, last_name } = req.body;
    if (!first_name || !last_name) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const Player = await modifyPlayerById(id, first_name, last_name);
    if (!Player) {
      return res
        .status(404)
        .json({ status: "fail", message: "Player not found" });
    }
    res.status(200).json({ status: "success", data: Player });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function deletePlayerById(req, res) {
  try {
    const id = req.params.id;
    const Player = await removePlayerById(id);
    if (!Player) {
      return res
        .status(404)
        .json({ status: "fail", message: "Player not found" });
    }
    res.status(204).send(); // 204 No Content
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
