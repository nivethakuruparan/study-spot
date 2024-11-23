import { Stack } from "expo-router";
import { View } from "react-native";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [loaded] = useFonts({
    OrelegaOneRegular: require("../assets/fonts/OrelegaOne-Regular.ttf"),
    PuritanBold: require("../assets/fonts/Puritan-Bold.ttf"),
    PuritanRegular: require("../assets/fonts/Puritan-Regular.ttf"),
    PuritanBoldItalic: require("../assets/fonts/Puritan-BoldItalic.ttf"),
    PuritanItalic: require("../assets/fonts/Puritan-Italic.ttf"),
  });
  return (
    <View style={{ flex: 1, backgroundColor: "#F9F7E8" }}>
      <Stack
        screenOptions={{
          headerShown: false, // Disable the header
          contentStyle: { backgroundColor: "transparent" }, // Make content transparent
        }}
      />
    </View>
  );
}
