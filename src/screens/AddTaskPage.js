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


const AddTaskPage = () => {
    const [text, setText] = React.useState('');
    const { isDarkmode, setTheme } = useTheme();
    return (
        <>
        <Layout>
            <View style={{alignItems:"center", marginVertical:20}}>
                <Text size="h1" fontWeight="bold" style={{color: isDarkmode ? 'white' : 'black'}}>Tasklight <FontAwesomeIcon size={35} name="lightbulb-o"></FontAwesomeIcon> </Text>
            </View>
            <Text style={{ marginBottom: 10 }}>TextInput</Text>
            <TextInput
                placeholder="Enter your text"
                value={text}
                onChangeText={(val) => setText(val)}
            />
            <TaskInput/>
        </Layout>
        </>
    );
};

export default AddTaskPage;