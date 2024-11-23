import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const Menu = () => {
  const router = useRouter();
  const currentPath = usePathname(); // Get the current path

  return (
    <View style={styles.menuContainer}>
      {/* Search */}
      <TouchableOpacity onPress={() => router.push("/")} style={styles.icon}>
        <FontAwesome
          name="search"
          size={24}
          color={currentPath === "/" ? "#FEFAE0" : "#D4A373"} // Green if on current page
        />
      </TouchableOpacity>

      {/* Favorites */}
      <TouchableOpacity
        onPress={() => router.push("/favorites")}
        style={styles.icon}
      >
        <FontAwesome
          name="heart"
          size={24}
          color={currentPath === "/favorites" ? "#FEFAE0" : "#D4A373"} // Green if on current page
        />
      </TouchableOpacity>

      {/* History */}
      <TouchableOpacity
        onPress={() => router.push("/history")}
        style={styles.icon}
      >
        <FontAwesome
          name="history"
          size={24}
          color={currentPath === "/history" ? "#FEFAE0" : "#D4A373"} // Green if on current page
        />
      </TouchableOpacity>

      {/* Settings */}
      <TouchableOpacity
        onPress={() => router.push("/settings")}
        style={styles.icon}
      >
        <FontAwesome
          name="cog"
          size={24}
          color={currentPath === "/settings" ? "#FEFAE0" : "#D4A373"} // Green if on current page
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row", // Align items horizontally
    justifyContent: "space-around", // Space between icons
    alignItems: "center",
    backgroundColor: "#65462A",
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10, // Shadow for Android
  },
  icon: {
    padding: 10,
  },
});

export default Menu;
