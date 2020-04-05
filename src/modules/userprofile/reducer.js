import _ from 'lodash';
import * as actiontypes from './actionTypes';

const initialState = {
    accountDetails: [],
    isEditVisible: false,
    membership: {},
};

export default function profile(state = initialState, action) {
    switch(action.type) {
        case actiontypes.GET_ACCOUNT_DETAILS_SUCCESS:
            return _.defaults({}, { accountDetails: action.accountDetails }, state);
        case actiontypes.TOGGLE_EDIT_VISIBILITY:
            return _.defaults({}, { isEditVisible: !state.isEditVisible }, state);
        case actiontypes.GET_MEMBERSHIP_SUCCESS:
            return _.defaultsDeep({}, { membership: action.membership }, state);
        default:
            return state;
    };
}