import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigations/MainAppStack";
import { Provider } from "react-redux";
import { store } from "./src/redux/Store";
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <Provider store={store}>
      <FlashMessage
        position="center"
       
      />
      <NavigationContainer>
        <MainAppStack />
      </NavigationContainer>
    </Provider>
  );
}
