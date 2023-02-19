import React from "react";
import { View, Linking } from "react-native";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";
import pxToEm from '../components/utils/pxToEm';
import pxtoRem from '../components/utils/pxToRem';


export default function ({ navigation }) {
    const { isDarkmode, setTheme } = useTheme();
    //To do list
    return (
    <Layout>
        <View style={{alignItems:"center", marginVertical:pxToEm(10)}}>

        </View>
    </Layout>
    )
}