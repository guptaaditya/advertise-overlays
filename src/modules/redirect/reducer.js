import _ from 'lodash';
import * as actionypes from './actiontypes';

const initialState = {
    currentURL: '',
    prevURL: ''
};

export default function redirectTo(state = initialState, action) {
    switch(action.type) {
        case actionypes.REDIRECT_TO:
            return {
                prevURL: state.currentURL,
                currentURL: action.url
            };
        default:
            return state;
    };
}