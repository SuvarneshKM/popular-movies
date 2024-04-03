import React from "react";
import { View, Text, Image } from "react-native";
import { Movies } from "../types";

interface MovieDetailsProps {
  route?: {
    params: {
      movie: Movies;
    };
  };
}

const MovieDetailsScreen: React.FC<MovieDetailsProps> = ({ route }) => {
  if (route?.params) {
    const { movie } = route.params;
    return (
      <View
        style={{
          flex: 1,
          position: "relative",
        }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as per requirement
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              lineHeight: 36,
              color: "#FFFFFF",
            }}
          >
            {movie.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 21,
              fontWeight: "600",
              color: "#FFFFFFA3",
            }}
          >
            {movie.overview}
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>No Data</Text>
      </View>
    );
  }
};

export default MovieDetailsScreen;
