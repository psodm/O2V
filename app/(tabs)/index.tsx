import {
  View,
  Text,
  Pressable,
  Appearance,
  useColorScheme,
  StyleSheet,
} from "react-native";
import { Link, router } from "expo-router";

const HomePage = () => {
  let colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={[styles.text, themeTextStyle]}>Home Page</Text>
      <Link href="/tab_1" style={[styles.text, themeTextStyle]}>
        Go to Tab 1
      </Link>
      <Pressable onPress={() => router.push("/tab_2")} pointerEvents="none">
        <Text style={[styles.text, themeTextStyle]}>Go to Tab 2</Text>
      </Pressable>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
  lightContainer: {
    backgroundColor: "#d0d0c0",
  },
  darkContainer: {
    backgroundColor: "#242c40",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#d0d0c0",
  },
});
