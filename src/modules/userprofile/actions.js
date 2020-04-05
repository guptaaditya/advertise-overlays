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

export function getAccountMembership() {
    return {
        type: types.GET_MEMBERSHIP,
    }
}

export function getAccountMembershipSuccess(membership) {
    return {
        type: types.GET_MEMBERSHIP_SUCCESS,
        membership
    }
}

export function onMembershipUpdateSuccess(payment) {
    return {
        type: types.UPDATE_MEMBERSHIP_SUCCESS,
        payment
    }
}