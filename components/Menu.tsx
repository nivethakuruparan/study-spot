import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const Menu = () => {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <View style={styles.menuContainer}>
      {/* Search */}
      <TouchableOpacity onPress={() => router.push("/")} style={styles.icon}>
        <FontAwesome
          name="search"
          size={24}
          color={currentPath === "/" ? "#FAEDCD" : "#D4A373"}
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
          color={currentPath === "/favorites" ? "#FAEDCD" : "#D4A373"}
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
          color={currentPath === "/history" ? "#FAEDCD" : "#D4A373"}
        />
      </TouchableOpacity>

      {/* Settings */}
      <TouchableOpacity style={styles.icon}>
        <FontAwesome
          name="cog"
          size={24}
          color={currentPath === "/settings" ? "#FAEDCD" : "#D4A373"}
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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#65462A",
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
  },
  icon: {
    padding: 10,
  },
});

export default Menu;
