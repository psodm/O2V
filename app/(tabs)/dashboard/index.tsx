import { Link } from "expo-router";
import { View, Text } from "react-native";

const index = () => {
  return (
    <View>
      <Text>Tab 1</Text>
      <Link href="dashboard/dummy_page">Enter Dashboard's Stack</Link>
    </View>
  );
};

export default index;
