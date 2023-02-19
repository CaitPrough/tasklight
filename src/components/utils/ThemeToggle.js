import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome'

import { Picker, useTheme } from 'react-native-rapi-ui';

const DarkModeToggle = () => {
  const { isDarkmode, setTheme } = useTheme();

  const handleToggle = (value) => {
    setIsDarkMode(value === 'dark');
  };

  return (
    <Picker
      items={[
        { value: 'light', label: <FontAwesomeIcon name="sun-o" /> },
        { value: 'dark', label: <FontAwesomeIcon name="moon-o" /> },
      ]}
      text={isDarkmode ? "Light Mode" : "Dark Mode"}
              status={isDarkmode ? "success" : "warning"}
              onPress={() => {
                if (isDarkmode) {
                  
                } else {
                  setTheme("dark");
                }
              }}
      onChange={handleToggle}
    />
  );
};

export default DarkModeToggle;
