import React, { useState } from 'react';
import { View, Text, Linking } from 'react-native';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome'
import { Picker, useTheme, Section, SectionContent } from 'react-native-rapi-ui';
import currentTheme from './CheckTheme';

const DarkModeToggle = () => {
  const [pickerValue, setPickerValue] = React.useState(null);
  const { isDarkmode, setTheme } = useTheme();
  const items = [
      { label: 'Dark Mode', value: 'dark' },
      { label: 'Light Mode', value: 'light' },
  ];
  return (
      <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
          <SectionContent>
              <View>
                  <Text style={{ marginBottom: 10 }}>Theme</Text>
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