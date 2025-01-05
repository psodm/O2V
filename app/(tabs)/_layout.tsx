import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="tab_1"
        options={{ headerTitle: "Tab 1", title: "Tab 1" }}
      />
      <Tabs.Screen
        name="index"
        options={{ headerTitle: "Home", title: "Home" }}
      />
      <Tabs.Screen
        name="tab_2/index"
        options={{ headerTitle: "Tab 2", title: "Tab 2" }}
      />
    </Tabs>
  );
};

export default TabsLayout;
