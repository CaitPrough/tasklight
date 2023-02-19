import {useState} from "react";
import { View, Linking, ScrollView, text } from "react-native";
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
    const [text, setText] = useState('');
    const { isDarkmode, setTheme } = useTheme();
    return (
        <>
        <Layout>
            <View style={{alignItems:"center", marginVertical:20}}>
                <Text size="h1" fontWeight="bold" style={{color: isDarkmode ? 'white' : 'black'}}>Tasklight <FontAwesomeIcon size={35} name="lightbulb-o"></FontAwesomeIcon> </Text>
                <Text size="h3" fontWeight="bold" style={{ marginVertical: 15 }}>What would you like to get done?</Text>
            </View>
            <View >

                <Section>
                    <SectionContent >
                        <Text size="xl" style={{alignItems:"left", marginBottom:15}} >Add a Task</Text>
                        <TextInput style={{marginHorizontal:16, marginVertical:5}}
                            placeholder="Enter a Task"
                            value={text}
                            onChangeText={(val) => setText(val)}
                            rightContent={
                                <FontAwesomeIcon name="pencil" size={30} />
                            }
                        />
                        <Button text="Add" style={{marginTop:15}} onPress={() => alert('Button tapped')} ></Button>
                    </SectionContent>
                </Section>
            </View>
        </Layout>
        </>
    );
};

export default AddTaskPage;