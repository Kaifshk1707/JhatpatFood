import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainDrawerStack from "./MainDrawerStack";
import NotificationScreen from "../components/notification/NotificationScreen";


const Stack = createNativeStackNavigator();

const MainAppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainDrawerStack" component={MainDrawerStack} />
    <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
  </Stack.Navigator>
);

export default MainAppStack;
