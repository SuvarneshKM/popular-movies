import React from "react";
import { Dimensions, Image, Text, View } from "react-native";

interface movieCardProps {
  poster_path: string;
  title: string;
}

export default function MovieCard({ poster_path, title }: movieCardProps) {
  return (
    <View
      style={{
        width: Dimensions.get("window").width / 2 - 20,
        height: "auto",
        display: "flex",
        flexDirection: "column",
        rowGap: 12,
        padding: 10,
      }}
    >
      <Image
        style={{
          width: "auto",
          height: 246,
          borderRadius: 10,
        }}
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="image"
      />
      <Text
        style={{
          fontSize: 12,
          lineHeight: 18,
          fontWeight: "600",
          color: "#FFFFFFCC",
        }}
      >
        {title}
      </Text>
    </View>
  );
}
