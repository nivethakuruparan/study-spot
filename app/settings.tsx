import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Menu from "../components/Menu";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Page</Text>
      <Text style={styles.content}>This is the Settings screen.</Text>

      {/* Add Menu */}
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F7E8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: "#333",
    marginBottom: 40,
  },
});
