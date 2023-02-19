import { View } from 'react-native';
import React from 'react';
import { TextInput, Text, Layout, useTheme } from 'react-native-rapi-ui';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome'
import { Ionicons } from '@expo/vector-icons';

const TaskInput = () => {
    const [taskName] = React.useState('');
    const { isDarkmode, setTheme } = useTheme();
    return (
        <>
        <Layout>
            <View>
                <Text style={{ marginBottom: 10 }}>New task</Text>
                <Text fontWeight="bold">Task</Text>
                <TextInput
                    placeholder="Enter your text"
                    value={taskName}
                    //onChangeText={(val) => setText(val)}
                    //use this to update storage i think
                    rightContent={
                        <FontAwesomeIcon name="pencil" size={20} />
                    }   
                />
            </View>
        </Layout>
        </>
    )
}

export default TaskInput;