// import pets from '../pets.json';

// const INITIAL_STATE = pets;

// export default function (state = INITIAL_STATE, action) {
//     return state;
// }

import {SET_PETS} from '../actions';


export default function(state = {}, action) {
  switch(action.type) {
    case SET_PETS:
      console.log(action.pets);
      return action.pets;
    default:
      return state;
  }
}