import { Request, Response } from "express";
import { fetchMovies } from "../services/movieService";

export const getMovies = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const movies = await fetchMovies(page);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
