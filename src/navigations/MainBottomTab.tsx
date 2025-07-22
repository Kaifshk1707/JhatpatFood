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
  const isTablet = width >= 768;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [
            styles.tabBarStyle,
            {
              bottom: hp("2%"),
              height: isTablet ? hp("10%") : hp("8%"),
              borderRadius: wp("5%"),
              paddingBottom:
                Platform.OS === "android"
                  ? hp(isTablet ? "1%" : "1.5%")
                  : hp(isTablet ? "2.5%" : "3%"),
              marginHorizontal: wp(isTablet ? "15%" : "5%"),
            },
          ],
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
                  size={wp("5%")}
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
                  size={wp("5%")}
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
                  size={wp("5%")}
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
                  size={wp("5%")}
                  color={focused ? "#FF6F00" : "gray"}
                />
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
  },
});
