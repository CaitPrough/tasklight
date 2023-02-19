import React, { useState } from 'react';
import { View, Text, Linking } from 'react-native';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome'
import { Picker, useTheme, Section, SectionContent, Layout } from 'react-native-rapi-ui';
//import currentTheme from './CheckTheme';
//Unsused and not needed anymore but im keeping it here anyway because I wasted 20 minutes on it

const DarkModeToggle = () => {
  const [pickerValue, setPickerValue] = React.useState(null);
  const { isDarkmode, setTheme } = useTheme();
  const items = [
      { label: 'Dark Mode', value: 'dark' },
      { label: 'Light Mode', value: 'light' },
  ];
  return (
        <Section style={{marginHorizontal:15, marginVertical:5}}>
            <SectionContent>
                <View >
                    <Text size="h3" style={{ marginBottom: 10, color: isDarkmode ? 'white' : 'black' }}>Theme</Text>
                    <Picker
                        items={items}
                        value={pickerValue}
                        placeholder="Theme"
                        onValueChange={(val) => setTheme(val)}
                    />
                </View>
            </SectionContent>
        </Section>
  );
};

export default DarkModeToggle;