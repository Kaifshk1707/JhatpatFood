import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainDrawerStack from "./MainDrawerStack";
import NotificationScreen from "../components/notification/NotificationScreen";
import AuthStack from "./AuthStack";
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

const Stack = createNativeStackNavigator();

const MainAppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
    <Stack.Screen name="MainDrawerStack" component={MainDrawerStack} />
    <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    <Stack.Screen name="ChickenScreen" component={ChickenScreen} />
    <Stack.Screen name="BurgerScreen" component={BurgerScreen} />
    <Stack.Screen name="DessertScreen" component={DessertScreen} />
    <Stack.Screen name="FishScreen" component={FishScreen} />
    <Stack.Screen name="DrinkScreen" component={DrinkScreen} />
    <Stack.Screen name="BiryaniScreen" component={BiryaniScreen} />
    <Stack.Screen name="MyOrderScreen" component={MyOrderScreen} />
    <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
    <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
    <Stack.Screen
      name="AccountSettingScreen"
      component={AccountSettingScreen}
    />
  </Stack.Navigator>
);

export default MainAppStack;
