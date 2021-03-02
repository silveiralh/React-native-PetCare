import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import ButtonStyledGreen from '../components/ButtonStyledGreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>PetCare</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Senha"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(senha) => this.setState({ senha })} />
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <ButtonStyledGreen label={"Login"} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 50,
        textAlign: "center",
        color:"#63E3B5",
        textShadowRadius:6,
        textShadowColor: "#fff",
        marginBottom:15
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        borderBottomColor: '#009688',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 0,
        borderBottomColor: '#FFFFFF',
        flexGrow: 1,
        textAlign: "center"
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    }
    
});

