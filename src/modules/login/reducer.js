import _ from 'lodash';
import * as actionypes from './actiontypes';

const initialState = {
    resetPasswordForUserEmail: '',
};

export default function userManagement(state = initialState, action) {
    switch(action.type) {
        case actionypes.ON_FORGOT_PASSWORD_SUCCESS:
            return {
                resetPasswordForUserEmail: action.useremail,
            };
        default:
            return state;
    };
}