import {SET_FIELD_PET, PET_SALVO}  from '../actions';
//  , SET_CAMPOS_PET, RESET_FORM_PET
const INITIAL_STATE = {
    img:'',
    nomePet: '',
    porte:'',
    tutor: '',
    especie:''
}

export default function(state = INITIAL_STATE, action) {
    
    switch (action.type) {
        case SET_FIELD_PET:
            const clonedState ={...state }
            clonedState[action.field] = action.value
            return clonedState;
        case PET_SALVO:
            return INITIAL_STATE;
        // case SET_CAMPOS_PET:
        //      return action.pet;
        // case RESET_FORM_PET:
        //     return INITIAL_STATE;
        default:
            return state;
    }

}