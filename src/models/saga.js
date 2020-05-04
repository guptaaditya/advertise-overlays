import { takeLatest, put, takeEvery } from 'redux-tale/es/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { showToast } from 'utils/ui';
import * as userProfileActions from 'modules/userprofile/actions';
import { getIsUserAuthenticatedFromStore } from 'modules/router/selectors';

function* onStoreInitialized() {
    // Dispatch all app init actions here

    //Below dispatch all actions, that are required for authenticated user
    const isUserAuthenticated = getIsUserAuthenticatedFromStore();
    if(isUserAuthenticated) {
        yield put(userProfileActions.getAccountDetails());
    }
}

export default [
    takeLatest(actionTypes.STORE_INITIALIZED, onStoreInitialized),
];