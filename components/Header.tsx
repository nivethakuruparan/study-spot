import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
    fontSize: 30,
    color: "#FEFAE0",
    fontFamily: "OrelegaOneRegular",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 4,
    resizeMode: "contain", // Ensures the image scales properly
  },
  subtitle: {
    fontSize: 16,
    color: "#FAEDCD",
    fontFamily: "PuritanRegular",
  },
});

export default Header;
