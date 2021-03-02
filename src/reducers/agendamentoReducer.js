import {SET_AGENDAMENTOS} from '../actions';


export default function(state = {}, action) {
  switch(action.type) {
    case SET_AGENDAMENTOS:
      console.log(action.agendamentos);
      return action.agendamentos;
    default:
      return state;
  }
}