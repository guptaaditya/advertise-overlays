import * as actionTypes from './actiontypes';

export function redirectTo(url) {
    return {
        type: actionTypes.REDIRECT_TO,
        url,
    }
}