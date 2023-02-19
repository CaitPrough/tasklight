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
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  const [text, setText] = useState('Useless Text');
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
        
        <Text>TextInput</Text>
        
            <TextInput
                placeholder="Enter your text"
                value={text}
                onChangeText={(val) => setText(val)}
            />
      
      </View>
    </Layout>
  );
}
