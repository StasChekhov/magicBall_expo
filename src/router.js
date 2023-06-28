import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SettingsScreen from "./Screens/SettingsScreen";

const tab = createBottomTabNavigator();

export const useRoute = () => {
  return (
    <tab.Navigator
      initialRouteName="TabsNav"
      screenOptions={{
        tabBarStyle: { backgroundColor: "black", opacity: 0.9 },

        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "white",
        tabBarHideOnKeyboard: false,
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
        name="Predict"
        component={HomeScreen}
      />
      <tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={color}
              size={24}
            />
          ),
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </tab.Navigator>
  );
};
