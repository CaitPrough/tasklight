import React from 'react';
import DarkModeToggle from '../components/utils/ThemeToggle';
import { View } from 'react-native'
import { Box, Text } from 'react-native-rapi-ui';

const SettingsPage = () => {
  return (
    <View>
      <Text as="h2">Settings</Text>
      <View>
        <Text as="h3">Appearance</Text>
        <DarkModeToggle />
      </View>
    </View>
  );
};

export default SettingsPage;
