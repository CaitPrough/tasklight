import { Text, TextInput } from 'react-native-rapi-ui';
import React from 'react';


const Forms = () => {
    const [text, setText] = React.useState('');
    return (
        <>
            <Text style={{ marginBottom: 10 }}>TextInput</Text>
            <TextInput
                placeholder="Enter your text"
                value={text}
                onChangeText={(val) => setText(val)}
            />
        </>
    );
};

export default Forms;