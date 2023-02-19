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
  CheckBox,
} from "react-native-rapi-ui";
import TaskInput from "../components/utils/NewTask";
//import Forms from "../components/testincomponent";


export default function ({ navigation }) {
    const { isDarkmode, setTheme } = useTheme();
    const [checkBox, setCheckbox] = React.useState(false)
    //To do list
    return (
    <Layout>
        <ScrollView>
            <View style={{alignItems:"center", marginVertical:20}}>
                <Text size="h1" fontWeight="bold" style={{color: isDarkmode ? 'white' : 'black'}}>Tasklight <FontAwesomeIcon size={35} name="lightbulb-o"></FontAwesomeIcon> </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems:"center", marginVertical:10, marginHorizontal:20}}>
            <CheckBox value={checkBox} onValueChange={(val) => setCheckbox(val)} />
                <Section style={{marginHorizontal:20, alignItems:"center"}}>
                    <SectionContent>
                        <Text>Welcome</Text>
                    </SectionContent>
                </Section>
            </View>
            <View style={{flexDirection: 'row', alignItems:"center", marginVertical:10, marginHorizontal:20}}>
            <CheckBox value={checkBox} onValueChange={(val) => setCheckbox(val)} />
                <Section style={{marginHorizontal:20, alignItems:"center"}}>
                    <SectionContent>
                        <Text>Welcome</Text>
                    </SectionContent>
                </Section>
            </View>
            <View style={{flexDirection: 'row', alignItems:"center", marginVertical:10, marginHorizontal:20}}>
            <CheckBox value={checkBox} onValueChange={(val) => setCheckbox(val)} />
                <Section style={{marginHorizontal:20, alignItems:"center"}}>
                    <SectionContent>
                        <Text>Welcome</Text>
                    </SectionContent>
                </Section>
            </View>
            
        </ScrollView>
                 
        
   
    </Layout>
    )
}