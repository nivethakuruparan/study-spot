import React from "react";
import { Text, StyleSheet, View } from "react-native";

interface TagProps {
  label: string;
  color: string;
}

const Tag: React.FC<TagProps> = ({ label, color }) => {
  return (
    <View style={[styles.tag, { backgroundColor: color }]}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  tagText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Tag;
