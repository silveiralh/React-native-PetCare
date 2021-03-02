import firebase from 'firebase';
import {
    Alert
} from 'react-native';

export const USER_LOGIN_SUCESS = '';
const userLoginSucess = user =>({
    type: USER_LOGIN_SUCESS,
    user
})
export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () =>({
    type: USER_LOGOUT,
})
export const processLogin =({email, password}) => dispatch =>{


        // tentativa de login
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(
                // loginUserSuccess
                user=>{
                const action =userLoginSucess(user);
                dispatch(action);
                return user;
                }) //entra no app se tiver retornado sucesso
                .catch(error => {//caso não seja bem sucedido
                //testa se o usuário existe, se nao existir oferece para o usuário criar um
                if (error.code == "auth/user-not-found"){
                    return new Promise((resolve, reject) => {
                        Alert.alert(
                        "Usuário não encontrado",
                        "Deseja criar um novo usuário?",
                        [{
                            text: 'Não',
                            onPress: () => {
                                resolve();
                            }
                        }, {
                            text: 'Sim',
                            //se sim, tenta criar um novo usuário
                            onPress: () => {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(email, password)
                                    .then(resolve())
                                    .catch(reject())
                            }
                        }],
                        { cancelable: true }
                    )
                    }) 
                }
                //caso não seja o erro de usuário não encontrado chama a função que testa os códigos de erro para exibir 
                //a mensagem correta
                return new Promise.reject(error); 
            })

}