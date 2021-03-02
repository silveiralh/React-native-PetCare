import {SET_FIELD_SERVICO, SERVICO_SALVO}  from '../actions';
// , RESET_FORM_SERVICO, SET_CAMPOS_SERVICO
const INITIAL_STATE = {
    nomeServico:'',
    valor: '',
    tempoEstimado:'',
}

export default function(state = INITIAL_STATE, action) {
    
    switch (action.type) {
        case SET_FIELD_SERVICO:
            const clonedState ={...state }
            clonedState[action.field] = action.value
            return clonedState;
        case SERVICO_SALVO:
            return INITIAL_STATE;
        // case SET_CAMPOS_SERVICO:
        //     return action.servico;
        // case RESET_FORM_SERVICO:
        //     return INITIAL_STATE;
        default:
            return state;
    }

}