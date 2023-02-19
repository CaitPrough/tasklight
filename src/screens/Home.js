import React from "react";
import { View, Linking, ScrollView } from "react-native";
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome'
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
  TextInput,
} from "react-native-rapi-ui";
import TaskInput from "../components/utils/NewTask";


export default function ({ navigation }) {
    const { isDarkmode, setTheme } = useTheme();
    //To do list
    return (
    <Layout>
        <ScrollView>
            <View style={{alignItems:"center", marginVertical:20}}>
                <Text size="h1" fontWeight="bold" style={{color: isDarkmode ? 'white' : 'black'}}>Tasklight <FontAwesomeIcon size={35} name="lightbulb-o"></FontAwesomeIcon> </Text>
            </View>
            <View style={{alignItems:"left", marginVertical:10}}>
                <TaskInput/>
            </View>
        </ScrollView>
    </Layout>
    )
}