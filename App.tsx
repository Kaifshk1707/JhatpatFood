import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigations/MainAppStack";
import { Provider } from "react-redux";
import { store } from "./src/redux/Store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainAppStack />
      </NavigationContainer>
    </Provider>
  );
}
