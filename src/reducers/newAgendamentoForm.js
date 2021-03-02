import {SET_FIELD_AGENDAMENTO, AGENDAMENTO_SALVO  }  from '../actions';
// , SET_CAMPOS_AGENDAMENTO, RESET_FORM_AGENDAMENTO
const INITIAL_STATE = {
    nomePet:'',
    servico: '',
    data:'',
    hora: '',
}

export default function(state = INITIAL_STATE, action) {
    
    switch (action.type) {
        case SET_FIELD_AGENDAMENTO:
            console.log(action.type)
            const clonedState ={...state }
            clonedState[action.field] = action.value
            return clonedState;
        case AGENDAMENTO_SALVO:
            return INITIAL_STATE;
        // case SET_CAMPOS_AGENDAMENTO:
        //     return action.agendamento;
        // case RESET_FORM_AGENDAMENTO:
        //     return INITIAL_STATE;
        default:
            return state;
    }

}