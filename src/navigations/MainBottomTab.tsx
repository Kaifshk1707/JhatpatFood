import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import ExploreScreen from "../screens/Explore/ExploreScreen";
import CartScreen from "../screens/Cart/CartScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Tab = createBottomTabNavigator();

const MainBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <FontAwesome
                name="home"
                size={wp("7%")}
                color={focused ? "#FF6F00" : "gray"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <FontAwesome
                name="compass"
                size={wp("7%")}
                color={focused ? "#FF6F00" : "gray"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <FontAwesome
                name="shopping-cart"
                size={wp("7%")}
                color={focused ? "#FF6F00" : "gray"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <FontAwesome
                name="user"
                size={wp("7%")}
                color={focused ? "#FF6F00" : "gray"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTab;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: hp("2%"),
    left: wp("5%"),
    right: wp("5%"),
    backgroundColor: "#ffffff",
    borderRadius: wp("5%"),
    height: hp("8%"),
    paddingBottom: Platform.OS === "android" ? hp("1%") : hp("3%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
