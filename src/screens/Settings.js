import React from 'react';
import DarkModeToggle from '../components/utils/ThemeToggle';
import pxToRem from '../components/utils/pxToRem';
import { View } from 'react-native'
import { Box, Layout, Text } from 'react-native-rapi-ui';

const SettingsPage = () => {
  return (
    <Layout>
        <View style={{ marginHorizontal:pxToRem(20), textAlign: "Left" }}>
            <Text fontWeight="bold" >Settings</Text>
            <Text>Appearance</Text>
        </View>
        <View>
            
        </View>
        <DarkModeToggle/>
    </Layout>
  );
};

export default SettingsPage;
