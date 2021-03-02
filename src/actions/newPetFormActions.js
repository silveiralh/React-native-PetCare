import firebase from 'firebase';
export const SET_FIELD_PET = 'SET_FIELD_PET';

export const setFieldPet = (field, value) => ({
        type: SET_FIELD_PET,
        field: field,
        value: value,
    
})

 export const PET_SALVO = 'PET_SALVO'
export const petSalvo = ()=>{
    return {
        type: PET_SALVO
    }
}
// export const SET_CAMPOS_PET = 'SET_CAMPOS_PET';
// export const setCamposPet = serie => ({
//   type: SET_CAMPOS_PET,
//   pet: pet
// });

// export const RESET_FORM_PET = 'RESET_FORM_PET';
// export const resetFormPet = () => ({
//   type: RESET_FORM_PET
// })
export const savePet = pet =>{ 
    const {currentUser} = firebase.auth();

     return async dispatch =>{
        return await firebase
            .database()
            .ref(`/users/${currentUser.uid}/pets`)
            .push(pet)
            .then( ()=>dispatch(petSalvo()))
    }
}

 