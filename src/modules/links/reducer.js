import _ from 'lodash';
import * as actiontypes from './actiontypes';

const initialState = {
    data: [],
};

export default function links(state = initialState, action) {
    switch(action.type) {
        case actiontypes.ON_FETCH_LINKS_SUCCESS:
            return {
                data: action.data,
            };
        default:
            return state;
    };
}