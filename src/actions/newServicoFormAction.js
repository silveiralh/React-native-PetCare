import firebase from 'firebase';
export const SET_FIELD_SERVICO = 'SET_FIELD_SERVICO';

export const setFieldServico = (field, value) => ({
        type: SET_FIELD_SERVICO,
        field: field,
        value: value,
    
})

export const SERVICO_SALVO = 'SERVICO_SALVO'
export const servicoSalvo = ()=>{
    return {
        type: SERVICO_SALVO
    }
}

// export const SET_CAMPOS_SERVICO = 'SET_CAMPOS_SERVICO';
// export const setCamposServico = serie => ({
//   type: SET_CAMPOS_SERVICO,
//   pet: servico
// });

// export const RESET_FORM_PET = 'RESET_FORM_PET';
// export const resetFormPet = () => ({
//   type: RESET_FORM_PET
// })

export const saveServico = servico =>{
    const {currentUser} = firebase.auth();

    return async dispatch =>{
        await firebase
            .database()
            .ref(`/users/${currentUser.uid}/servicos`)
            .push(servico)

        dispatch(servicoSalvo())
    }

} 
 