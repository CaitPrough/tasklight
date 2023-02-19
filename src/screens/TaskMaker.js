import React, { useState } from "react";
import { View } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
  TextInput,
} from "react-native-rapi-ui";
import DateTimePicker from 'react-datetime-picker'
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  const [text, setText] = useState('Enter Here');
  return (
    <Layout>
      <TopNav
        middleContent="Task Maker"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : "#191921"}
          />
        }
        leftAction={() => navigation.goBack()}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* This text using ubuntu font */}
        <Text fontWeight="bold">This is the second screen</Text>
        
        <TextInput
            placeholder="Enter your text"
            value={text}
            onChangeText={(val) => setText(val)}
        />

        <Text>Date and Time to complete task</Text>
        <DateTimePicker />
      
      </View>
    </Layout>
  );
}
