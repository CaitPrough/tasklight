import { useTheme } from "react-native-rapi-ui";

const currentTheme = () => {
  const { theme, isDarkmode } = useTheme();
  return(theme)
};

export default currentTheme;