import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface ReviewProps {
  username: string;
  rating: number; // Overall rating
  description: string;
}

const Review: React.FC<ReviewProps> = ({ username, rating, description }) => {
  return (
    <View style={styles.container}>
      {/* User Information */}
      <View style={styles.userInfo}>
        <Text style={styles.username}>{username}</Text>
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, index) => (
            <FontAwesome
              key={index}
              name="star"
              size={16}
              color={index < rating ? "#FFD700" : "#E0E0E0"}
            />
          ))}
        </View>
      </View>

      {/* Review Description */}
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#F9F7E8",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    fontFamily: "PuritanBold",
    color: "#65462A",
  },
  ratingContainer: {
    flexDirection: "row",
  },
  description: {
    fontSize: 14,
    color: "#65462A",
    fontFamily: "PuritanRegular",
  },
});

export default Review;
