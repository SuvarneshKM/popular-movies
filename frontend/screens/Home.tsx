import { FlatList, TouchableOpacity, View } from "react-native";
import { useSQLiteContext } from "expo-sqlite/next";
import { Movies } from "../types";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import MovieCard from "../components/movieCard";

const BASE_URL = "http://localhost:3000";

export default function Home() {
  const [movies, setMovies] = useState<Movies[]>([]);

  const [page, setPage] = useState<number>(1);

  const db = useSQLiteContext();
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movies?page=${page}`);
      const newMovies: Movies[] = response.data;

      newMovies.forEach((movie) => {
        db.withTransactionAsync(async () => {
          await db.runAsync(
            `
          INSERT INTO Movies (title, original_title, overview, release_date, popularity, vote_average, vote_count, adult, video, original_language, backdrop_path, poster_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `,
            [
              movie.title,
              movie.original_title,
              movie.overview,
              movie.release_date,
              movie.popularity,
              movie.vote_average,
              movie.vote_count,
              movie.adult,
              movie.video,
              movie.original_language,
              movie.backdrop_path,
              movie.poster_path,
            ]
          );
        });
      });
      setMovies([...movies, ...newMovies]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleMoviePress = (movie: Movies) => {
    navigation.navigate("MovieDetails", { movie });
  };

  const renderItem = ({ item }: { item: Movies }) => (
    <TouchableOpacity onPress={() => handleMoviePress(item)}>
      <MovieCard poster_path={item.poster_path} title={item.title} />
    </TouchableOpacity>
  );

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#0D0C0F",
      }}
    >
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        numColumns={2}
      />
    </View>
  );
}
