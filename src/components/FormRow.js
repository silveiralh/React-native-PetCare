import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FormRow = (props) => {
    const { children } = props;

    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#009688',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderBottomWidth: 1,
        marginBottom: 20,
        flexDirection: 'row',
        textAlign: "center"
    }
});

export default FormRow;