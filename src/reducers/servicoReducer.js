// import servicos from '../servicos.json';

// const INITIAL_STATE = servicos;

// export default function (state = INITIAL_STATE, action) {
//     return state;
// }
import {SET_SERVICOS} from '../actions';


export default function(state = {}, action) {
  switch(action.type) {
    case SET_SERVICOS:
      console.log('action.servicos');
      return action.servicos;
    default:
      return state;
  }
}