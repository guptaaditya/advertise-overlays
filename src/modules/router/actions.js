import * as actionTypes from './actiontypes';

export function onLoginSuccess() {
    return {
        type: actionTypes.ON_AUTHENTICATION_SUCCESS
    }
}