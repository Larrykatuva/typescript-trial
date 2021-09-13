import { initialState } from "./initialStates";
import { REGISTER_USER, LOGIN_USER } from '../actions/types';

const user = (state = initialState, action: any) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state, user:action.payload
            };

        case LOGIN_USER:
            return {
                ...state, user:action.payload
            };

        default:
            return state;
    }
};

export default user;