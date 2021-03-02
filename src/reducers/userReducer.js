import { USER_LOGOUT, USER_LOGIN_SUCESS } from '../actions';

export default function userReducerd(state = null, action) {
    switch (action.type) {
       
        case USER_LOGIN_SUCESS: 
            return action.user;
        case USER_LOGOUT:
            return null;
        default:
            return state;
    }
}