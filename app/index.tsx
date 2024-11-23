import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

// components
import Menu from "@/components/Menu";
import FilterOption from "@/components/FilterOption";
import Listing from "@/components/Listing";

// data
import listingsData from "@/data/listingsData";
import filterData from "@/data/filterData";

export default function Search() {
  const [isFilterVisible, setIsFilterVisible] = useState(false); // Control modal visibility
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]); // Applied filters

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
    setSelectedFilters([]); // Clear selected filters
    setAppliedFilters([]); // Clear applied filters
    setIsFilterVisible(false); // Close modal
  };

  // Filter listings based on applied filters
  const filteredListings =
    appliedFilters.length > 0
      ? listingsData.filter((listing) =>
          appliedFilters.every((filter) =>
            listing.tags.some((tag) => tag.label === filter)
          )
        )
      : listingsData; // Show all listings if no filters are applied

  // Handle "Save to Favourites" notification
  const handleSaveToFavourites = () => {
    Toast.show({
      type: "success",
      text1: "Saved to Favourites",
      visibilityTime: 2000, // Duration for which the notification is visible
    });
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>STUDYSPOT</Text>
          <Image
            source={require("../assets/images/book-icon.png")} // Replace with the correct path
            style={styles.icon}
          />
        </View>
        <Text style={styles.subtitle}>Find your next study spot here!</Text>
      </View>

      {/* Listings Section */}
      <View style={styles.listingsSection}>
        <View style={styles.listingsRow}>
          <Text style={styles.listingsText}>View Listings</Text>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setIsFilterVisible(true)}
          >
            <FontAwesome5 name="sliders-h" size={30} color="#65462A" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.listingsScroll}>
        {filteredListings.length > 0 ? (
          filteredListings.map((listing, index) => (
            <Listing
              key={index}
              title={listing.title}
              description={listing.description}
              tags={listing.tags}
              image={listing.image}
              onHeartPress={handleSaveToFavourites} // Pass notification handler to Listing component
            />
          ))
        ) : (
          <Text style={styles.noResultsText}>
            No listings match the selected criteria.
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
            {/* Close Button */}
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
                  selectedFilters={selectedFilters} // Pass selected filters
                  onOptionChange={handleOptionChange}
                />
              ))}
            </ScrollView>
            {/* Reset Filters Button */}
            <TouchableOpacity
              style={[styles.actionButton, styles.resetButton]}
              onPress={resetFilters}
            >
              <Text style={styles.actionButtonText}>Reset Filters</Text>
            </TouchableOpacity>
            {/* Apply Button */}
            <TouchableOpacity
              style={styles.actionButton}
              onPress={applyFilters}
            >
              <Text style={styles.actionButtonText}>Apply</Text>
            </TouchableOpacity>
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
  topSection: {
    backgroundColor: "#65462A",
    padding: 20,
    paddingTop: 60,
    paddingBottom: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    color: "#FEFAE0",
    fontFamily: "OrelegaOneRegular",
  },
  icon: {
    width: 32,
    height: 32,
    marginLeft: 4,
    resizeMode: "contain", // Ensures the image scales properly
  },
  subtitle: {
    fontSize: 18,
    color: "#FAEDCD",
    fontFamily: "PuritanItalic",
  },
  listingsSection: {
    padding: 20,
  },
  listingsRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  listingsText: {
    fontSize: 34,
    fontFamily: "OrelegaOneRegular",
    textTransform: "uppercase",
    color: "#555E3B",
    marginRight: 10, // Adjust space between text and icon
  },
  filterButton: {
    paddingTop: 2,
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
    maxHeight: "70%", // Adjust the height of the scrollable area
    marginBottom: 30, // Space between scroll section and "Apply" button
  },
  filterSection: {
    marginBottom: 16, // Space between filter sections
  },
  closeButton: {
    padding: 10,
    backgroundColor: "#8C5A2C",
    borderRadius: 8,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#FAEDCD",
    fontSize: 16,
    fontFamily: "PuritanBold",
    textTransform: "uppercase",
  },
  listingsScroll: {
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 70,
  },
  noResultsText: {
    textAlign: "center",
    fontSize: 16,
    color: "#999",
  },
  actionButton: {
    padding: 10,
    backgroundColor: "#8C5A2C",
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10, // Space between buttons
  },
  resetButton: {
    backgroundColor: "#E63946", // Red color for reset button
  },
  actionButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
