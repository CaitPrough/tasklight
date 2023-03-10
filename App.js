import React from "react";
import Task from "./src/components/utils/Task";
import AppNavigator from "./src/navigation/AppNavigator";
import { ThemeProvider} from "react-native-rapi-ui";
export default function App() {
  return (  
    <ThemeProvider theme="dark">
      <AppNavigator />
    </ThemeProvider>
  );
}
