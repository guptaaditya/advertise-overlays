import _ from 'lodash';
import * as actiontypes from './actiontypes';

const initialState = {
    linksList: [],
};

export default function links(state = initialState, action) {
    switch(action.type) {
        case actiontypes.ON_FETCH_LINKS_SUCCESS:
            return {
                list: action.linksList,
            };
        default:
            return state;
    };
}