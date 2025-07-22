import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import auth from "@react-native-firebase/auth";

// Screens
import MainDrawerStack from "./MainDrawerStack";
import AuthStack from "./AuthStack";
import NotificationScreen from "../components/notification/NotificationScreen";
import BurgerScreen from "../components/explore/Categories/BurgerScreen";
import DessertScreen from "../components/explore/Categories/DessertScreen";
import FishScreen from "../components/explore/Categories/FishScreen";
import DrinkScreen from "../components/explore/Categories/DrinkScreen";
import BiryaniScreen from "../components/explore/Categories/BiryaniScreen";
import ChickenScreen from "../components/explore/Categories/ChickenScreen";
import AccountSettingScreen from "../components/profile/AccountSettingScreen";
import FavouriteScreen from "../components/profile/FavouriteScreen";
import MyOrderScreen from "../components/profile/MyOrderScreen";
import LanguageScreen from "../components/profile/LanguageScreen";
import HelpAndSupport from "../components/home/DrawerScreen/HelpAndSupport";

const Stack = createNativeStackNavigator();

const MainAppStack = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((authUser) => {
      setUser(authUser);
      if (initializing) setInitializing(false);
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  if (initializing) {
    // Show loading screen until Firebase checks session
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="#FF6F00" size={60} />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        //  User is logged in → show main app
        <>
          <Stack.Screen name="MainDrawerStack" component={MainDrawerStack} />
          <Stack.Screen
            name="NotificationScreen"
            component={NotificationScreen}
          />
          <Stack.Screen name="ChickenScreen" component={ChickenScreen} />
          <Stack.Screen name="BurgerScreen" component={BurgerScreen} />
          <Stack.Screen name="DessertScreen" component={DessertScreen} />
          <Stack.Screen name="FishScreen" component={FishScreen} />
          <Stack.Screen name="DrinkScreen" component={DrinkScreen} />
          <Stack.Screen name="BiryaniScreen" component={BiryaniScreen} />
          <Stack.Screen name="MyOrderScreen" component={MyOrderScreen} />
          <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
          <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
          <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
          <Stack.Screen
            name="AccountSettingScreen"
            component={AccountSettingScreen}
          />
        </>
      ) : (
        //  User not logged in → show Auth stack
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default MainAppStack;
