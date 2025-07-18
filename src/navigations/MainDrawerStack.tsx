import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainBottomTab from "./MainBottomTab";
import AboutUs from "../components/home/DrawerScreen/AboutUs";
import Settings from "../components/home/DrawerScreen/Settings";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { useTranslation } from "react-i18next";


const Drawer = createDrawerNavigator();

const MainDrawerStack = ({navigation}) => {
  const { t } = useTranslation();
  const { value } = useSelector((state: RootState) => state.cartSlice);
  return (
    <Drawer.Navigator
      initialRouteName={t("jhatpat_food")}
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
        name={t("jhatpat_food")}
        component={MainBottomTab}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerRight: () => (
            <View
              style={{
                marginRight: 15,
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Ionicons
                name="notifications-outline"
                size={32}
                color="#fff"
                onPress={() => {
                  navigation.navigate("NotificationScreen");
                }}
              />
              <Ionicons
                name="cart-outline"
                size={32}
                color="#fff"
                // onPress={() => {
                //   navigation.navigate("CartScreen");
                // }}
              />
              {value > 0 && (
                <View
                  style={{
                    position: "absolute",
                    top: -4,
                    right: -6,
                    backgroundColor: "red",
                    borderRadius: 10,
                    minWidth: 24,
                    height: 24,
                    paddingHorizontal: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}
                  >
                    {value > 99 ? "99+" : value}
                  </Text>
                </View>
              )}
            </View>
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
