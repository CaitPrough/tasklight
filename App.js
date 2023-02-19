import React from "react";
import Task from "./Task";
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider} from "react-native-rapi-ui";
export default function App() {
  return (  
    <ThemeProvider theme="dark">
      <AppNavigator />
    </ThemeProvider>
  );
}
