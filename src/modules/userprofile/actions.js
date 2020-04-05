import * as types from './actionTypes';

export function getAccountDetails() {
    return {
        type: types.GET_ACCOUNT_DETAILS
    }
}

export function getAccountDetailsSuccess(accountDetails) {
    return {
        type: types.GET_ACCOUNT_DETAILS_SUCCESS,
        accountDetails
    }
}

export function saveAccountDetails(accountDetails) {
    return {
        type: types.SAVE_ACCOUNT_DETAILS,
        accountDetails
    }
}

export function toggleEdit() {
    return {
        type: types.TOGGLE_EDIT_VISIBILITY,
    }
}