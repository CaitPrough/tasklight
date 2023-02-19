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
        
                <Text fontWeight="bold">Task</Text>
                <TextInput
                    placeholder="Enter your text"
                    value={taskName}
                    //onChangeText={(val) => setText(val)}
                    //use this to update storage i think
                    rightContent={
                        <FontAwesomeIcon name="pencil" size={30} />
                    }   
                />
        </>
    )
}

export default TaskInput;