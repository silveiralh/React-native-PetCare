import React, { Component } from 'react';
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

export default class LoginPage extends Component {

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
        firebase.initializeApp(firebaseConfig);
    }
    onChangeHandler(field, valor) {
        this.setState({
            [field]: valor
        })
    }

    processLogin() {
        this.setState({ isLoading: true });

        const { email, password } = this.state;

        const loginUserSuccess = user => {
            this.setState({ message: "Sucesso!" });
            this.props.navigation.navigate('Home');
        }
        const loginUserFailed = error => {
            Alert.alert("Senha fraca", "A senha deve ter mais de 6 caracteres.")
        }


        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(loginUserSuccess)
            .catch(error => {
                if (error.code == "auth/user-not-found")
                    Alert.alert(
                        "Usuário não encontrado",
                        "Deseja criar um novo usuário?",
                        [{
                            text: 'Não',

                        }, {
                            text: 'Sim',
                            onPress: () => {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(email, password)
                                    .then(loginUserSuccess)
                                    .catch(loginUserFailed)
                            }
                        }],
                        { cancelable: true }
                    )
                this.getMessageByError(error.code)
            })
            .then(() => {
                this.setState({ isLoading: false });

            })
    }
    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    }

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

    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator size="large" color="#E36363" />;
        return (
            <ButtonStyledGreen label={"Login"} />
        );
    }

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
                        underlineColorAndroid='transparent'
                        onChangeText={valor => {
                            this.onChangeHandler('password', valor)
                        }}
                    />
                </FormRow>
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