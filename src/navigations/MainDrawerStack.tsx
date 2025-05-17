import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainBottomTab from "./MainBottomTab";
import AboutUs from "../components/home/DrawerScreen/AboutUs";
import Settings from "../components/home/DrawerScreen/Settings";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

const Drawer = createDrawerNavigator();

const MainDrawerStack = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName="JhatpatFood"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FF6F00", // Top AppBar background color
        },
        headerTintColor: "#fff", // AppBar title/icon color
        drawerStyle: {
          backgroundColor: "#fff", // Drawer background
          width: 260,
        },
        drawerActiveBackgroundColor: "#FFE0B2", // Selected item background
        drawerActiveTintColor: "#FF6F00", // Selected item text & icon
        drawerInactiveTintColor: "#555", // Unselected text & icon
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -10, // Fixes label spacing with icon
        },
        drawerItemStyle: {
          marginVertical: 4, // Vertical space between items
          borderRadius: 8,
        },
      }}
    >
      <Drawer.Screen
        name="JhatpatFood"
        component={MainBottomTab}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerRight: () => (
            <Ionicons
              name="notifications-outline"
              size={22}
              color="#fff"
              style={{ marginRight: 15 }}
              onPress={() => {
                console.log("Notifications Pressed");
                navigation.navigate("NotificationScreen");
              }}
            />
            // <View style={{ flexDirection: "row", alignItems: "center" }}>
            //   <Ionicons
            //     name="search"
            //     size={22}
            //     color="#333"
            //     style={{ marginRight: 12 }}
            //   />
            //   <Ionicons name="notifications-outline" size={22} color="#333" />
            // </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerLabel: "Settings",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          drawerLabel: "About Us",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerStack;
