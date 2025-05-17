import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainDrawerStack from "./MainDrawerStack";
import FoodDetailsScreen from "../screens/FoodDetailsScreen";


const Stack = createNativeStackNavigator();

const MainAppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainDrawerStack" component={MainDrawerStack} />
    <Stack.Screen name="FoodDetails" component={FoodDetailsScreen} />
  </Stack.Navigator>
);

export default MainAppStack;
