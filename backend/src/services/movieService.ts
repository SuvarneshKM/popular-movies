import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

if (!API_KEY || !BASE_URL) {
  throw new Error("API_KEY or BASE_URL is missing in .env file");
}

export const fetchMovies = async (page: number = 1) => {
  const response = await axios.get(
    `${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`
  );
  return response.data.results;
};
