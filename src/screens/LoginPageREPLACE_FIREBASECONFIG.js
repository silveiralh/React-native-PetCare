import React, { Component } from 'react';
import {connect} from 'react-redux'
import FormRow from '../components/FormRow';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    ActivityIndicator,
    Button
} from 'react-native';
import ButtonStyledGreen from '../components/ButtonStyledGreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import {processLogin} from '../actions'

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isLoading: false,
            message: "",
            isLogged: false,
        }
    }
    componentDidMount() {
        var firebaseConfig = {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: "",
            measurementId: ""
        };
        // Initialize Firebase
        if (!firebase.apps.length) {
             firebase.initializeApp(firebaseConfig);
        }
    }
    onChangeHandler(field, valor) {
        this.setState({
            [field]: valor
        })
    }
 
    processLogin() {
        this.setState({ isLoading: true });
        const { email, password } = this.state;

        this.props.processLogin({email, password})
        .then(user=>{
            if(user){
                 this.props.navigation.replace('Home');
            } else{
                this.setState({
                isLoading: false,
                message:'',
            })
            }
        })
        .catch(error=>{
            this.setState({
                isLoading: false,
                mensagem:this.getMessageByError(error.code),
                })

        })

       
    }

    // função para dar um switch em alguns códigos de erro e atribuir uma mensagem de erro no state.message
    getMessageByError(code) {

        switch (code) {
            case "auth/user-not-found":
                return this.setState({ message: "O email não foi encontrado." });
            case "auth/invalid-email":
                return this.setState({ message: "Digite o email." });
            case "auth/wrong-password":  
                return this.setState({ message: "A senha está incorreta." });
            case "auth/weak-password":
                return this.setState({ message: "A senha deve ter mais de 6 caracteres." });
            default:
                return this.setState({ message: "Erro desconhecido." });

        }
    }

    // função para renderizar o botão
    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator size="large" color="#E36363" />;
        return (
            <ButtonStyledGreen label={"Login"} />
        );
    }

    // função de exibição da mensagem de erro
    renderMessage() {
        const { message } = this.state;

        if (!message)
            return null;

        return (
            <View style={styles.containerErro}>
                <Text style={styles.erro}>{message}</Text>
            </View>
        );

    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>PetCare</Text>
                <FormRow>
                    <TextInput
                        style={styles.inputs}
                        placeholder="Email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        value={this.state.email}
                        underlineColorAndroid='transparent'
                        onChangeText={valor => {
                            this.onChangeHandler('email', valor)
                        }}
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        style={styles.inputs}
                        placeholder="Senha"
                        secureTextEntry={true}
                        value={this.state.password}
                        autoCapitalize="none"
                        underlineColorAndroid='transparent'
                        onChangeText={valor => {
                            this.onChangeHandler('password', valor)
                        }}
                    />
                </FormRow>
                {/* mapeando o clique no botao renderizado */}
                <TouchableOpacity onPress={() => this.processLogin()}>
                    {this.renderButton()}
                </TouchableOpacity>

                {this.renderMessage()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 50,
        textAlign: "center",
        color: "#63E3B5",
        textShadowRadius: 6,
        textShadowColor: "#fff",
        marginBottom: 15
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, erro: {
        color: "white"
    },
    containerErro: {
        padding: 15,
        marginTop: 30,
        borderRadius: 20,
        backgroundColor: "#E36363",
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputs: {
        height: 45,
        marginLeft: 0,
        borderBottomColor: '#FFFFFF',
        width: 250,
        height: 45,
        textAlign: "center"
    }

});

export default connect(null, {processLogin})(LoginPage)