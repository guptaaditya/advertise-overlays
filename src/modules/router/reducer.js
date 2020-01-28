import _ from 'lodash';
import * as actionypes from './actiontypes';

const initialState = {
    isAuthenticated: false,
    token: ''
};

export default function auth(state = initialState, action) {
    switch(action.type) {
        case actionypes.ON_AUTHENTICATION_SUCCESS:
            return {
                isAuthenticated: true,
                token: 'xyz',
            };
        default:
            return state;
    };
}