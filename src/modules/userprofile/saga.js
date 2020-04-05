import _ from 'lodash';
import { takeLatest, put, takeEvery } from 'redux-tale/es/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { redirectTo } from 'modules';
import { showToast } from 'utils/ui';
import { stateHelper } from 'app/selectors';
import { timezones } from './constants';

const accountDetails = [
    { label: 'Name', value: 'Aditya Gupta' },
    { label: 'Email', value: 'guptaaditya24@gmail.com' },
    { label: 'Timezone', value: "Asia/Calcutta" },
];

const membershipDetails = {
    planName: 'Free - Basic Usage - Limited',
    linksLimit: '10',
    overlaysLimit: '0',
    shareLinkLimit: '100',
    type: 'basic',
    upgradePrice: 1,
    upgradeCurrency: 'USD',
    upgradeCurrencySymbol: '$',
};


const proMembershipDetails = {
    planName: 'Premium - Unlimited Usage',
    linksLimit: 'Unlimited',
    overlaysLimit: 'Unlimited',
    shareLinkLimit: 'Unlimited',
    type: 'pro',
};

function* onGetAccountDetails() {
    try {
        const result = yield Promise.resolve(accountDetails);
        yield put(actions.getAccountDetailsSuccess(result));
    } catch (error) {
        console.error(error);
    }
}

function* onSaveAccountDetails({ accountDetails: { name, password, timezone } }) {
    try {
        yield Promise.resolve(true); // make api call here to save and then finally set the data in account details
        showToast('Account details saved successfully', 'success');
        const nameField = _.find(accountDetails, detail => detail.label === 'Name');
        const timezoneField = _.find(accountDetails, detail => detail.label === 'Timezone');
        nameField.value = name;
        timezoneField.value = timezone;
        yield put(actions.getAccountDetailsSuccess(accountDetails));
        yield put(actions.toggleEdit());
    } catch (error) {
        console.error(error);
    }
}

function* onGetMembershipDetails() {
    try {
        const result = yield Promise.resolve(membershipDetails);
        yield put(actions.getAccountMembershipSuccess(result));
    } catch (error) {
        console.error(error);
    }
}

function* onUpgradeMembership({ payment }) {
    try {
        console.log(payment);
        const result = yield Promise.resolve(payment);
        yield put(actions.getAccountMembershipSuccess(proMembershipDetails));
    } catch (error) {
        console.error(error);
    }
}

export default [
    takeLatest(actionTypes.GET_ACCOUNT_DETAILS, onGetAccountDetails),
    takeLatest(actionTypes.SAVE_ACCOUNT_DETAILS, onSaveAccountDetails),
    takeLatest(actionTypes.GET_MEMBERSHIP, onGetMembershipDetails),
    takeEvery(actionTypes.UPDATE_MEMBERSHIP_SUCCESS, onUpgradeMembership),
];