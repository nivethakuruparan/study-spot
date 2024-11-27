import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

// components
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import FilterOption from "@/components/FilterOption";
import Listing from "@/components/Listing";
import Review from "@/components/Review";

// data
import listingsData from "@/data/listingsData";
import filterData from "@/data/filterData";

export default function Search() {
  const [isFilterVisible, setIsFilterVisible] = useState(false); // Control filter modal visibility
  const [isReviewVisible, setIsReviewVisible] = useState(false); // Control review modal visibility
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);
  const [selectedReviews, setSelectedReviews] = useState<
    { username: string; rating: number; description: string }[]
  >([]); // Reviews for the selected listing

  const handleClose = () => {
    Alert.alert(
      "Discard Changes",
      "Are you sure you want to close? Your changes won't be saved.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Close",
          style: "destructive",
          onPress: () => setIsFilterVisible(false),
        },
      ]
    );
  };

  const handleOptionChange = (option: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(option)
        ? prevFilters.filter((item) => item !== option)
        : [...prevFilters, option]
    );
  };

  // Apply filters
  const applyFilters = () => {
    setAppliedFilters(selectedFilters);
    setIsFilterVisible(false); // Close modal
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedFilters([]);
    setAppliedFilters([]);
    setIsFilterVisible(false);
  };

  // Filter listings based on applied filters
  const filteredListings =
    appliedFilters.length > 0
      ? listingsData.filter((listing) =>
          appliedFilters.every((filter) =>
            listing.tags.some((tag) => tag.label === filter)
          )
        )
      : listingsData;

  // Handle "Save to Favourites" notification
  const handleSaveToFavourites = () => {
    Toast.show({
      type: "success",
      text1: "Saved to Favourites",
      visibilityTime: 1000,
    });
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

      {/* Listings Title Section */}
      <View style={styles.listingsSection}>
        <View style={styles.listingsRow}>
          <Text style={styles.listingsText}>View Listings</Text>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setIsFilterVisible(true)}
          >
            <FontAwesome5 name="sliders-h" size={24} color="#65462A" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Listings Section */}
      <ScrollView style={styles.listingsScroll}>
        {filteredListings.length > 0 ? (
          filteredListings.map((listing, index) => (
            <Listing
              key={index}
              title={listing.title}
              description={listing.description}
              tags={listing.tags}
              image={listing.image}
              reviews={listing.reviews} // Pass reviews to the listing
              onHeartPress={handleSaveToFavourites}
              onReadReviews={() => openReviewModal(listing.reviews)} // Open the review modal
            />
          ))
        ) : (
          <Text style={styles.noResultsText}>
            No listings match the selected criteria. Please adjust your search
            filters.
          </Text>
        )}
      </ScrollView>

      {/* Filter Modal */}
      <Modal
        visible={isFilterVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsFilterVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeIconButton}
              onPress={handleClose}
            >
              <FontAwesome5 name="times" size={24} color="#8C5A2C" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Filter Search</Text>
            <Text style={styles.modalSubtitle}>
              Customize your search by selecting filters to find study spots
              that meet your preferences
            </Text>
            <ScrollView style={styles.scrollableSection}>
              {filterData.map((filter, index) => (
                <FilterOption
                  key={index}
                  title={filter.title}
                  options={filter.options}
                  color={filter.color}
                  selectedFilters={selectedFilters}
                  onOptionChange={handleOptionChange}
                />
              ))}
            </ScrollView>
            <TouchableOpacity
              style={[styles.actionButton, styles.resetButton]}
              onPress={resetFilters}
            >
              <Text style={styles.actionButtonText}>Reset Filters</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={applyFilters}
            >
              <Text style={styles.actionButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
            {/* Overall Rating Subtitle */}
            <Text style={styles.modalSubtitle}>
              Study Spot Overall Rating:{" "}
              {selectedReviews.length > 0
                ? (
                    selectedReviews.reduce(
                      (acc, review) => acc + review.rating,
                      0
                    ) / selectedReviews.length
                  ).toFixed(1)
                : "N/A"}{" "}
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
  listingsRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  listingsText: {
    fontSize: 32,
    fontFamily: "OrelegaOneRegular",
    textTransform: "uppercase",
    color: "#555E3B",
    marginRight: 14,
  },
  filterButton: {
    paddingTop: 4,
    backgroundColor: "#F9F7E8",
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
  listingsScroll: {
    paddingHorizontal: 20,
    marginBottom: 70,
  },
  noResultsText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "PuritanBoldItalic",
    color: "#65462A",
  },
  actionButton: {
    padding: 10,
    backgroundColor: "#D4A373",
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
    fontFamily: "PuritanBoldItalic",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  resetButton: {
    backgroundColor: "#65462A",
  },
  actionButtonText: {
    color: "#FEFAE0",
    fontSize: 16,
    fontFamily: "PuritanBold",
  },
});
