import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Tag from "./Tag";

interface ListingProps {
  title: string;
  description: string;
  tags: { label: string; color: string }[];
  image: string;
  reviews: { username: string; rating: number; description: string }[];
  onHeartPress: () => void;
  onReadReviews: () => void;
  isFavorite: boolean; // New prop
}

const Listing: React.FC<ListingProps> = ({
  title,
  description,
  tags,
  image,
  reviews,
  onHeartPress,
  onReadReviews,
  isFavorite, // New prop
}) => {
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite); // Initialize with prop

  const toggleFavorite = () => {
    setIsFavoriteState((prevState) => !prevState);
    onHeartPress();
  };

  return (
    <View style={styles.card}>
      {/* Favorite Icon */}
      <TouchableOpacity style={styles.favoriteIcon} onPress={toggleFavorite}>
        <FontAwesome
          name="heart"
          size={24}
          color={isFavoriteState ? "red" : "gray"}
        />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Image */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* Description */}
      <Text style={styles.description}>{description}</Text>

      {/* Tags */}
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <Tag key={index} label={tag.label} color={tag.color} />
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Study Here</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onReadReviews}>
          <Text style={styles.buttonText}>Read Reviews</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E9EDC9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    position: "relative",
  },
  favoriteIcon: {
    position: "absolute",
    top: 16,
    right: 19,
    zIndex: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: "OrelegaOneRegular",
    color: "#8C5A2C",
    marginBottom: 10,
    paddingRight: 40,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    fontFamily: "PuritanRegular",
    color: "#65462A",
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  button: {
    flex: 1,
    backgroundColor: "#D4A373",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#FEFAE0",
    fontSize: 16,
    fontFamily: "PuritanBold",
    textTransform: "uppercase",
  },
});

export default Listing;
