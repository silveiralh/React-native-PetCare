import firebase from 'firebase';

export const SET_FIELD_AGENDAMENTO = 'SET_FIELD_AGNDAMENTO';
export const setFieldAgendamento = (field, value) => ({
        type: SET_FIELD_AGENDAMENTO,
        field: field,
        value: value,
    
})

export const AGENDAMENTO_SALVO = 'AGENDAMENTO_SALVO'
export const agendamentoSalvo = ()=>{
    return {
        type: AGENDAMENTO_SALVO
    }
}


// export const SET_CAMPOS_AGENDAMENTO = 'SET_CAMPOS_AGENDAMENTO';
// export const setCamposAgendamento = serie => ({
//   type: SET_CAMPOS_AGENDAMENTO,
//   agendamento: agendamento
// });

// export const RESET_FORM_AGENDAMENTO = 'RESET_FORM_AGENDAMENTO';
// export const resetFormAgendamento = () => ({
//   type: RESET_FORM_AGENDAMENTO
// })
export const saveAgendamento = agendamento =>{
    const {currentUser} = firebase.auth();

    return async dispatch =>{
        await firebase
            .database()
            .ref(`/users/${currentUser.uid}/agendamentos`)
            .push(agendamento)
            
        dispatch(agendamentoSalvo());
    }
} 