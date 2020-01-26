import _ from 'lodash';
import * as actionypes from './actiontypes';

const initialState = {
    isAuthenticated: false,
};

export default function auth(state = initialState, action) {
    switch(action.type) {
        case actionypes.ON_AUTHENTICATION_SUCCESS:
            return {
                isAuthenticated: true,
            };
        default:
            return state;
    };
}