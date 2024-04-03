import express from "express";
import { getMovies } from "../controllers/movieController";

const router = express.Router();

router.get("/", getMovies);

export default router;
