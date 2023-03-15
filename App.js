import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./src/navigation/AppNavigation";
import { useLoadResources } from "./src/hooks/useLoadResources";
import { store } from "./src/store/store";
import { Provider } from "react-redux";

export default function App() {
  const resourcesLoaded = useLoadResources();
  if (!resourcesLoaded) return null;
  return (
    <Provider store={store}>
      <MainNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
}
