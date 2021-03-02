import {combineReducers } from 'redux';
import userReducer from './userReducer'; 
import newPetForm from './newPetForm';
import newServicoForm from './newServicoForm';
import newAgendamentoForm from './newAgendamentoForm'; 
import petReducer from './petReducer';
import servicoReducer from './servicoReducer';
import agendamentoReducer from './agendamentoReducer';

export default combineReducers({
    user: userReducer,
    petForm: newPetForm,
    petsList: petReducer,
    servicoForm: newServicoForm,
    servicoList: servicoReducer,
    agendamentoForm: newAgendamentoForm,
    agendamentoList: agendamentoReducer,
}); 