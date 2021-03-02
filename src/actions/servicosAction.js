import firebase from 'firebase';

import {Alert} from 'react-native';

export const SET_SERVICOS = 'SET_SERVICOS';
const setServicos = servicos => ({
  type: SET_SERVICOS,
  servicos: servicos
})


export const watchServicos = () =>{
    const {currentUser} = firebase.auth();

    return dispatch =>{
      firebase
        .database()
        .ref(`/users/${currentUser.uid}/servicos`)
        .on('value', snapshot =>{
            const servicos = snapshot.val();
            const action =setServicos(servicos);
            dispatch(action);
            console.log(snapshot.val());
        })
    }
}

export const deleteServico = servico => {
  
    return dispatch => {
      return new Promise((resolve, reject) => {
        Alert.alert(
          'Exclusão', 
          `Deseja excluir o servico ${servico.nomeServico}?`, 
          [{
            text: 'Não',
            onPress: () => {
              resolve(false);
            }
          },{
            text: 'Sim',
            onPress: async () => {
              const { currentUser } = firebase.auth();

              try {
                await firebase
                .database()
                  .ref(`/users/${currentUser.uid}/servicos/${servico.id}`)
                  .remove();

                resolve(true);
              } catch(e) {
                reject(e);
              }

            }
          }
        ],
        { cancelable: false }
        )
      })
    }
}