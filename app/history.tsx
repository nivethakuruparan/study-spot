import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
} from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import ListingHistory from "@/components/ListingHistory";
import Review from "@/components/Review";
import initialListingsHistoryData from "@/data/listingsHistoryData";

export default function History() {
  const [listingsHistoryData, setListingsHistoryData] = useState(
    initialListingsHistoryData
  );
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const [isReadReviewsModalVisible, setIsReadReviewsModalVisible] =
    useState(false);
  const [selectedListing, setSelectedListing] = useState<string | null>(null);
  const [selectedReviews, setSelectedReviews] = useState<
    {
      username: string;
      rating: number;
      description: string;
    }[]
  >([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const handleReadReviews = (
    reviews: { username: string; rating: number; description: string }[]
  ) => {
    setSelectedReviews(reviews);
    setIsReadReviewsModalVisible(true);
  };

  const submitReview = () => {
    if (!reviewText.trim()) {
      Alert.alert(
        "Incomplete Review",
        "Please add a description for your review."
      );
      return;
    }
    if (rating === 0) {
      Alert.alert("Incomplete Review", "Please select a star rating.");
      return;
    }

    setListingsHistoryData((prevData) =>
      prevData.map((listing) =>
        listing.title === selectedListing
          ? {
              ...listing,
              hasReview: true,
              reviews: [
                ...listing.reviews,
                {
                  username: "CurrentUser", // Placeholder username
                  rating,
                  description: reviewText,
                },
              ],
            }
          : listing
      )
    );

    Alert.alert(
      "Review Submitted",
      `Your review for "${selectedListing}" has been submitted!`,
      [{ text: "OK", onPress: () => setIsReviewModalVisible(false) }]
    );
    setReviewText("");
    setRating(0);
  };

  const handleCloseAddReview = () => {
    Alert.alert(
      "Discard Changes",
      "Are you sure you want to close this? Changes made might not be saved.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Close",
          style: "destructive",
          onPress: () => setIsReviewModalVisible(false),
        },
      ]
    );
  };

  const setStarRating = (index: number) => {
    setRating(index + 1);
  };

  const reviewedListings = listingsHistoryData.filter(
    (listing) => listing.hasReview
  );

  const pendingReviewListings = listingsHistoryData.filter(
    (listing) => !listing.hasReview
  );

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.listingsScroll}>
        <Text style={styles.sectionTitle}>Pending Reviews</Text>
        {pendingReviewListings.length > 0 ? (
          pendingReviewListings.map((listing, index) => (
            <ListingHistory
              key={index}
              title={listing.title}
              description={listing.description}
              tags={listing.tags}
              image={listing.image}
              reviews={listing.reviews}
              hasReview={listing.hasReview}
              onReadReviews={() => handleReadReviews(listing.reviews)}
              onReviewPress={() => {
                setSelectedListing(listing.title);
                setIsReviewModalVisible(true);
              }}
            />
          ))
        ) : (
          <Text style={styles.noReviewsText}>
            There are no pending reviews.
          </Text>
        )}
        <Text style={styles.sectionTitle}>Reviewed Listings</Text>
        {reviewedListings.map((listing, index) => (
          <ListingHistory
            key={index}
            title={listing.title}
            description={listing.description}
            tags={listing.tags}
            image={listing.image}
            reviews={listing.reviews}
            hasReview={listing.hasReview}
            onReadReviews={() => handleReadReviews(listing.reviews)}
            onReviewPress={() =>
              Alert.alert(
                "Already Reviewed",
                "You have already reviewed this spot."
              )
            }
          />
        ))}
      </ScrollView>

      {/* Add Review Modal */}
      <Modal
        visible={isReviewModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseAddReview}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Cross Icon to Close */}
            <TouchableOpacity
              style={styles.closeIconButton}
              onPress={handleCloseAddReview}
            >
              <FontAwesome5 name="times" size={24} color="#8C5A2C" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Add Review</Text>
            <TextInput
              style={styles.input}
              placeholder="Write your review..."
              value={reviewText}
              onChangeText={setReviewText}
            />
            <Text style={styles.ratingTitle}>Select Rating:</Text>
            <View style={styles.starsRow}>
              {[...Array(5)].map((_, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setStarRating(index)}
                >
                  <FontAwesome
                    name="star"
                    size={30}
                    color={index < rating ? "#FFD700" : "#ccc"}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={submitReview}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Read Reviews Modal */}
      <Modal
        visible={isReadReviewsModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsReadReviewsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Cross Icon to Close */}
            <TouchableOpacity
              style={styles.closeIconButton}
              onPress={() => setIsReadReviewsModalVisible(false)}
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

      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFAE0",
  },
  sectionTitle: {
    fontSize: 32,
    fontFamily: "OrelegaOneRegular",
    textTransform: "uppercase",
    color: "#555E3B",
    marginRight: 14,
    paddingVertical: 10,
  },
  noReviewsText: {
    fontSize: 16,
    fontFamily: "PuritanRegular",
    textAlign: "center",
    color: "#8C5A2C",
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
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
    marginBottom: 10,
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  ratingTitle: {
    fontSize: 16,
    fontFamily: "PuritanBold",
    color: "#FEFAE0",
    marginBottom: 10,
  },
  starsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    gap: 10,
  },
  submitButton: {
    backgroundColor: "#D4A373",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "PuritanBold",
  },
  listingsScroll: {
    paddingHorizontal: 20,
    marginBottom: 70,
  },
});
