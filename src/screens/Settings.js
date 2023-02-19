import React from 'react';
import DarkModeToggle from '../components/utils/ThemeToggle';
import { ScrollView, View } from 'react-native'
import { Box, Layout, Text } from 'react-native-rapi-ui';

const SettingsPage = () => {
  return (
    <Layout style={{flex:6}}>
        <ScrollView>
            <View style={{ marginHorizontal:20, marginVertical:10, textAlign: "Left" }}>
                <Text size="h1" fontWeight="bold" >Settings</Text>
            </View>
            <View style={{ marginHorizontal:20, marginVertical:15, textAlign: "Left"}}> 
                <Text size="h3">Appearance</Text>           
            </View>
            <DarkModeToggle/>

        </ScrollView>
    </Layout>
  );
};

export default SettingsPage;
