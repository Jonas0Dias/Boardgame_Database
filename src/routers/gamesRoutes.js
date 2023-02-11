import { Router } from "express";
import { getGames, postGames } from "../controllers/GamesController.js";


const GamesRouter=Router();

GamesRouter.get("/games", getGames);
GamesRouter.post("/games", postGames )

export default GamesRouter;