import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import ExploreScreen from "../screens/Explore/ExploreScreen";
import CartScreen from "../screens/Cart/CartScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import { FontAwesome } from "@expo/vector-icons";
import {
  View,
  Platform,
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Tab = createBottomTabNavigator();

const MainBottomTab = () => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768; // Define tablet breakpoint

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarActiveTintColor: "#FF6F00",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [
            styles.tabBarStyle,
            // {
            //   bottom: hp(isTablet ? "1.5%" : "2%"),
            //   height: isTablet ? hp("10%") : hp("8%"),
            //   borderRadius: wp("5%"),
            //   marginHorizontal: wp(isTablet ? "10%" : "5%"),
            //   paddingBottom: Platform.OS === "android" ? hp("1%") : hp("2%"), // Consistent padding
            // },
          ],
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home", // Explicitly set label
            tabBarIcon: ({ color }) => (
              <View style={styles.iconContainer}>
                <FontAwesome name="home" size={28} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: ({ color }) => (
              <View style={styles.iconContainer}>
                <FontAwesome name="compass" size={28} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color }) => (
              <View style={styles.iconContainer}>
                <FontAwesome name="shopping-cart" size={28} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <View style={styles.iconContainer}>
                <FontAwesome name="user" size={28} color={color} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default MainBottomTab;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp("-1%"),
  },
  tabBarLabel: {
    fontSize: wp("3.5%"), 
    fontWeight: "600",
    marginTop: hp("0.5%"),
  },
});
