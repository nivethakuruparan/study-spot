import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface FilterOptionProps {
  title: string;
  options: string[];
  color: string;
  selectedFilters: string[]; // Add this prop
  onOptionChange: (option: string) => void; // Callback to parent
}

const FilterOption: React.FC<FilterOptionProps> = ({
  title,
  options,
  color,
  selectedFilters,
  onOptionChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: color }]}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionRow}
          onPress={() => onOptionChange(option)}
        >
          <View style={styles.checkbox}>
            {selectedFilters.includes(option) && (
              <MaterialIcons name="check" size={16} color={color} />
            )}
          </View>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "#E9EDC9",
    marginBottom: 20,
  },
  header: {
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    color: "#FAEDCD",
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: "PuritanBold",
    fontWeight: "bold",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#8C5A2C",
    backgroundColor: "#E9EDC9",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#7C8A56",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    fontFamily: "PuritanRegular",
    color: "#7C8A56",
  },
});

export default FilterOption;
