import { takeLatest, put } from 'redux-tale/es/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import API_CONFIG from 'constants/apiconfig';
import api from 'utils/client';
import { showToast } from 'utils/ui';

function* onGetAffiliates() {
    const { message = {}, type } = API_CONFIG.PAYOUTS_STATS;
    try {
        const affiliatesData = yield api[type]({ ...API_CONFIG.PAYOUTS_STATS });
        yield put(actions.onGetAffiliatesSuccess(affiliatesData));
    } catch (error) {
        console.error(error);
        const errorMessage = message.error[error.status];
        if(errorMessage) showToast(errorMessage);
    }
}

const onGetAffiliatesSaga = takeLatest(actionTypes.GET_AFFILIATES, onGetAffiliates);

export default [
    onGetAffiliatesSaga,
];