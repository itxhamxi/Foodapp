import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo-app-loading";
import MealsNavigator  from "./navigation/MealsNavigator";

export default function App() {
  return (
   <MealsNavigator/>
  );
}
