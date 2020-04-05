import _ from 'lodash';
import { takeLatest, put } from 'redux-tale/es/effects';
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
        yield Promise.resolve(true); // make api call here
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

const onGetAccountDetailsSaga = takeLatest(actionTypes.GET_ACCOUNT_DETAILS, onGetAccountDetails);
const onSaveAccountDetailsSaga = takeLatest(actionTypes.SAVE_ACCOUNT_DETAILS, onSaveAccountDetails);

export default [
    onGetAccountDetailsSaga,
    onSaveAccountDetailsSaga,
];