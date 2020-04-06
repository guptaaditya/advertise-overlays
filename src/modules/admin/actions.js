import * as types from './actionTypes';

export function onGetAffiliates() {
    return {
        type: types.GET_AFFILIATES,
    }
}

export function onGetAffiliatesSuccess(affiliates) {
    return {
        type: types.GET_AFFILIATES_SUCCESS,
        affiliates,
    }
}