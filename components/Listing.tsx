import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Tag from "./Tag"; // Import the Tag component

interface ListingProps {
  title: string;
  description: string;
  tags: { label: string; color: string }[]; // Tags with label and color
  image: string; // Path to the image file or URI
  onHeartPress: () => void; // Callback function for saving to favorites
}

const Listing: React.FC<ListingProps> = ({
  title,
  description,
  tags,
  image,
  onHeartPress,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
    if (!isFavorite) {
      onHeartPress(); // Show "Saved to Favourites" notification when favorited
    }
  };

  return (
    <View style={styles.card}>
      {/* Favorite Icon */}
      <TouchableOpacity style={styles.favoriteIcon} onPress={toggleFavorite}>
        <FontAwesome
          name="heart"
          size={24}
          color={isFavorite ? "red" : "gray"}
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Read Reviews</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F9F7E8",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    position: "relative", // For the favorite icon positioning
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#65462A",
    marginBottom: 10,
    paddingRight: 40, // Avoid overlap with the heart icon
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#333",
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
    gap: 2, // Reduce the gap between the buttons
  },
  button: {
    flex: 1, // Each button takes up half the available width
    backgroundColor: "#8C5A2C",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Listing;
