import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigations/MainAppStack";
import { Provider } from "react-redux";
import { store } from "./src/redux/Store";
import FlashMessage from "react-native-flash-message";
import i18n from "./src/localization/i18n";
import { I18nextProvider } from "react-i18next";

export default function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <FlashMessage position="center" />
        <NavigationContainer>
          <MainAppStack />
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
}
