import { Link } from "expo-router";
import { View, Text } from "react-native";

const index = () => {
  return (
    <View>
      <Text>Tab 1</Text>
      <Link href="tab_1/dummy_page">Enter Tab 1's Stack</Link>
    </View>
  );
};

export default index;
