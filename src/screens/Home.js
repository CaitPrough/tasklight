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
    const [checkBox1, setCheckbox1] = React.useState(false)
    const [checkBox2, setCheckbox2] = React.useState(false);
    const [checkBox3, setCheckbox3] = React.useState(false);
    //To do list
    return (
    <Layout>
        <ScrollView>
            <View style={{alignItems:"center", marginVertical:20}}>
                <Text size="h1" fontWeight="bold" style={{color: isDarkmode ? 'white' : 'black'}}>Tasklight <FontAwesomeIcon size={35} name="lightbulb-o"></FontAwesomeIcon> </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems:"center", marginVertical:10, marginHorizontal:20}}>
            <CheckBox value={checkBox1} onValueChange={(val) => setCheckbox1(val)} />
                <Section style={{marginHorizontal:20, alignItems:"center"}}>
                    <SectionContent>
                        <Text>Get Physics Homework done</Text>
                    </SectionContent>
                </Section>
            </View>
            <View style={{flexDirection: 'row', alignItems:"center", marginVertical:10, marginHorizontal:20}}>
            <CheckBox value={checkBox2} onValueChange={(val) => setCheckbox2(val)} />
                <Section style={{marginHorizontal:20, alignItems:"center"}}>
                    <SectionContent>
                        <Text>Finish newspaper piece</Text>
                    </SectionContent>
                </Section>
            </View>
            <View style={{flexDirection: 'row', alignItems:"center", marginVertical:10, marginHorizontal:20}}>
            <CheckBox value={checkBox3} onValueChange={(val) => setCheckbox3(val)} />
                <Section style={{marginHorizontal:20, alignItems:"center"}}>
                    <SectionContent>
                        <Text>code out CS project</Text>
                    </SectionContent>
                </Section>
            </View>
            
        </ScrollView>
                 
        
   
    </Layout>
    )
}