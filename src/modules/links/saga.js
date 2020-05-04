import { takeLatest, put } from 'redux-tale/es/effects';
import * as actionTypes from './actiontypes';
import * as actions from './actions';
import API_CONFIG from 'constants/apiconfig';
import api from 'utils/client';
import { showToast } from 'utils/ui';

function* onFetchLinks() {
    const { message = {}, type } = API_CONFIG.LINKS_LIST;
    try {
        const linksList = yield api[type]({ ...API_CONFIG.LINKS_LIST });
        yield put(actions.onFetchLinksSuccess(linksList));
    } catch (error) {
        console.error(error);
        const errorMessage = message.error[error.status];
        if(errorMessage) showToast(errorMessage);
    }
}

const onFetchLinksSaga = takeLatest(actionTypes.FETCH_LINKS, onFetchLinks);

export default [
    onFetchLinksSaga,
];