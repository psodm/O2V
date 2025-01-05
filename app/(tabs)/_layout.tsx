import React from "react";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const TabsLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          headerTitle: "Dashboard",
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="signal" color={color} size={16} />
          ),
        }}
      />
      <Tabs.Screen
        name="foodlog"
        options={{
          headerTitle: "Food Log",
          title: "Food Logd",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="utensils" color={color} size={16} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "",
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="plus-circle"
              color={color}
              size={32}
              style={{ marginBottom: -10 }}
            />
          ),
          tabBarShowLabel: false,
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            // navigation.navigate("modal");
          },
        })}
      />
      <Tabs.Screen
        name="workouts/index"
        options={{
          headerTitle: "Workouts",
          title: "Workouts",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="dumbbell" color={color} size={16} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerTitle: "Settings",
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-cog" color={color} size={16} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
