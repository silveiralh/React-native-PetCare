import firebase from 'firebase';

import {Alert} from 'react-native';

export const SET_AGENDAMENTOS = 'SET_AGENDAMENTOS';
const setAgendamentos = agendamentos => ({
  type: SET_AGENDAMENTOS,
  agendamentos: agendamentos
})

export const watchAgendamentos = () => {
    const {currentUser} = firebase.auth();

    return dispatch => {
      firebase
        .database()
        .ref(`/users/${currentUser.uid}/agendamentos`)
        .on('value', snapshot =>{
            const agendamentos = snapshot.val();
            const action =setAgendamentos(agendamentos);
        dispatch(action);
            console.log(snapshot.val());
        })

    }
}

export const deleteAgendamento = agendamento => {
  
    return dispatch => {
      return new Promise((resolve, reject) => {
        Alert.alert(
          'Exclusão', 
          `Deseja excluir o agendamento do ${agendamento.nomePet}?`, 
          [{
            text: 'Não',
            onPress: () => {
              resolve(false);
            },
          },{
            text: 'Sim',
            onPress: async () => {
              const { currentUser } = firebase.auth();

              try {
                await firebase
                .database()
                  .ref(`/users/${currentUser.uid}/agendamentos/${agendamento.id}`)
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