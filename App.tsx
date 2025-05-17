import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigations/MainAppStack";

export default function App() {
  return (
    <NavigationContainer>
      <MainAppStack />
    </NavigationContainer>
  );
}
