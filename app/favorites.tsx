import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

// components
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import Listing from "@/components/Listing";
import Review from "@/components/Review";

// data
import listingsData from "@/data/listingsData";

export default function Favorites() {
  const [favorites, setFavorites] = useState(listingsData); // All listings are favorited initially
  const [isReviewVisible, setIsReviewVisible] = useState(false); // Control review modal visibility
  const [selectedReviews, setSelectedReviews] = useState<
    { username: string; rating: number; description: string }[]
  >([]); // Reviews for the selected listing

  // Handle removing a favorite listing
  const handleRemoveFavorite = (index: number) => {
    Alert.alert(
      "Remove from Favorites",
      "Are you sure you want to remove this listing from your favorites?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          style: "destructive",
          onPress: () => {
            const updatedFavorites = favorites.filter((_, i) => i !== index);
            setFavorites(updatedFavorites);
            Toast.show({
              type: "info",
              text1: "Removed from Favorites",
              visibilityTime: 1000,
            });
          },
        },
      ]
    );
  };

  // Open Review Modal
  const openReviewModal = (
    reviews: { username: string; rating: number; description: string }[]
  ) => {
    setSelectedReviews(reviews);
    setIsReviewVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <Header />

      {/* Favorites Title Section */}
      <View style={styles.listingsSection}>
        <Text style={styles.listingsText}>Favorites</Text>
      </View>

      {/* Favorites Listings Section */}
      <ScrollView style={styles.listingsScroll}>
        {favorites.length > 0 ? (
          favorites.map((listing, index) => (
            <Listing
              key={index}
              title={listing.title}
              description={listing.description}
              tags={listing.tags}
              image={listing.image}
              reviews={listing.reviews}
              onHeartPress={() => handleRemoveFavorite(index)}
              onReadReviews={() => openReviewModal(listing.reviews)}
              isFavorite={true} // Ensure heart is red by default
            />
          ))
        ) : (
          <Text style={styles.noResultsText}>
            No favorites yet. Start adding some!
          </Text>
        )}
      </ScrollView>

      {/* Review Modal */}
      <Modal
        visible={isReviewVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsReviewVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeIconButton}
              onPress={() => setIsReviewVisible(false)}
            >
              <FontAwesome5 name="times" size={24} color="#8C5A2C" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Reviews</Text>
            <Text style={styles.modalSubtitle}>
              Study Spot Overall Rating:{" "}
              {selectedReviews.length > 0
                ? (
                    selectedReviews.reduce(
                      (acc, review) => acc + review.rating,
                      0
                    ) / selectedReviews.length
                  ).toFixed(1)
                : "N/A"}
            </Text>
            <ScrollView style={styles.scrollableSection}>
              {selectedReviews.map((review, index) => (
                <Review
                  key={index}
                  username={review.username}
                  rating={review.rating}
                  description={review.description}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Main Menu */}
      <Menu />

      {/* Toast Notification */}
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFAE0",
  },
  listingsSection: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  listingsText: {
    fontSize: 32,
    fontFamily: "OrelegaOneRegular",
    textTransform: "uppercase",
    color: "#555E3B",
  },
  listingsScroll: {
    paddingHorizontal: 20,
    marginBottom: 70,
  },
  noResultsText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "PuritanBoldItalic",
    color: "#65462A",
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    height: "60%",
    backgroundColor: "#7C8A56",
    borderRadius: 10,
    padding: 20,
  },
  closeIconButton: {
    position: "absolute",
    top: 10,
    right: 14,
    zIndex: 14,
  },
  modalTitle: {
    fontSize: 34,
    fontFamily: "OrelegaOneRegular",
    color: "#FEFAE0",
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 20,
  },
  modalSubtitle: {
    fontSize: 16,
    alignContent: "center",
    marginBottom: 20,
    color: "#FAEDCD",
    textAlign: "center",
    fontFamily: "PuritanRegular",
  },
  scrollableSection: {
    backgroundColor: "#2D321F",
    paddingTop: 20,
    maxHeight: "70%",
    marginBottom: 20,
    borderRadius: 8,
  },
});
