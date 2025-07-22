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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

const Drawer = createDrawerNavigator();

const MainDrawerStack = ({ navigation }) => {
  const { t } = useTranslation();
  const { value } = useSelector((state: RootState) => state.cart);

  return (
    <Drawer.Navigator
      initialRouteName={t("jhatpat_food")}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FF6F00",
        },
        headerTintColor: "#fff",
        drawerStyle: {
          backgroundColor: "#fff",
          width: wp("65%"),
        },
        drawerActiveBackgroundColor: "#FFE0B2",
        drawerActiveTintColor: "#FF6F00",
        drawerInactiveTintColor: "#555",
        drawerLabelStyle: {
          fontSize: RFValue(15),
          marginLeft: -wp("2.5%"),
        },
        drawerItemStyle: {
          marginVertical: hp("0.5%"),
          borderRadius: wp("2%"),
        },
      }}
    >
      <Drawer.Screen
        name={t("jhatpat_food")}
        component={MainBottomTab}
        options={{
          drawerLabel: t("home"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={RFValue(22)} color={color} />
          ),
          headerRight: () => (
            <View
              style={{
                marginRight: wp("4%"),
                flexDirection: "row",
                alignItems: "center",
                padding: wp("2%"),
              }}
            >
              <Ionicons
                name="notifications-outline"
                size={RFValue(24)}
                color="#fff"
                onPress={() => {
                  navigation.navigate("NotificationScreen");
                }}
                style={{ marginRight: wp("4%") }}
              />
              <Ionicons
                name="cart-outline"
                size={RFValue(24)}
                color="#fff"
                // onPress={() => navigation.navigate("CartScreen")}
              />
              {value > 0 && (
                <View
                  style={{
                    position: "absolute",
                    top: hp("-0.5%"),
                    right: wp("1%"),
                    backgroundColor: "red",
                    borderRadius: wp("5%"),
                    minWidth: wp("6%"),
                    height: wp("6%"),
                    paddingHorizontal: wp("1%"),
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: RFValue(12),
                      fontWeight: "bold",
                    }}
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
          drawerLabel: t("settings"),
          drawerIcon: ({ color }) => (
            <Ionicons name="settings" size={RFValue(22)} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          drawerLabel: t("about_us"),
          drawerIcon: ({ color }) => (
            <Ionicons
              name="information-circle"
              size={RFValue(22)}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerStack;
