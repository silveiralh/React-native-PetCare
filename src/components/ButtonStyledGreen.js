import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const ButtonStyledGreen = (props) => (
    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} >
        <Text style={styles.loginText}>{props.label}</Text>
    </TouchableHighlight>

);

const styles = StyleSheet.create({
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#63E3B5",
    },
    loginText: {
        color: 'white',
    }
})
export default ButtonStyledGreen;