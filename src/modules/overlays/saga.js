import { takeLatest, put } from 'redux-tale/es/effects';
import * as actionTypes from './actiontypes';
import * as actions from './actions';
import { redirectTo } from 'modules';
import { stateHelper } from 'app/selectors';
import { getSelectedOverlay } from './selectors';
import API_CONFIG from 'constants/apiconfig';
import api from 'utils/client';
import { showToast } from 'utils/ui';

function* onFetchOverlays() {
    const { message = {}, type } = API_CONFIG.OVERLAYS_LIST;
    try {
        const overlaysList = yield api[type]({ ...API_CONFIG.OVERLAYS_LIST });
        yield put(actions.onFetchOverlaysSuccess(overlaysList));
    } catch (error) {
        console.error(error);
        const errorMessage = message.error[error.status];
        if(errorMessage) showToast(errorMessage);
    }
}

function* onNameSelected({ redirectPath }) {
    const selectedOverlay = stateHelper(getSelectedOverlay);
    selectedOverlay.overlayType = selectedOverlay.type;
    const { message = {}, type } = API_CONFIG.OVERLAY_CREATE;
    try {
        const overlay = yield api[type]({ 
            ...API_CONFIG.OVERLAY_CREATE,
            body: { ...selectedOverlay }, 
        });
        showToast(message.success, 'success');
        overlay.type = overlay.overlayType;
        yield put(actions.loadCustomizeOverlay(overlay, redirectPath));
        yield put(actions.onSaveOverlaySuccess());
    } catch (error) {
        const errorMessage = message.error[error.status];
        showToast(errorMessage, 'error');
    }
}

function* onCustomizeOverlay({ overlay, redirectPath }) {
    yield put(redirectTo(`${redirectPath}${overlay.id}`));
}

function* onGetOverlay({ overlayId }) {
    const { message = {}, type } = API_CONFIG.OVERLAY_DETAILS;
    try {
        const overlay = yield api[type]({ 
            ...API_CONFIG.OVERLAY_DETAILS,
            urlParams: { overlayId }
        });
        overlay.type = overlay.overlayType;
        yield put(actions.onGetOverlaySuccess(overlay));
    } catch (error) {
        console.error(error);
        const errorMessage = message.error[error.status];
        if(errorMessage) showToast(errorMessage);
    }
}

function* onSaveCustomizedOverlay({ overlay, redirectPath }) {
    const { message = {}, type } = API_CONFIG.OVERLAY_UPDATE;
    try {
        yield api[type]({ 
            ...API_CONFIG.OVERLAY_UPDATE,
            urlParams: { overlayId: overlay.id },
            body: { ...overlay }, 
        });
        yield put(redirectTo(redirectPath));
    } catch (error) {
        console.error(error);
        const errorMessage = message.error[error.status];
        if(errorMessage) showToast(errorMessage);
    }
}

const onFetchOverlaysSaga = takeLatest(actionTypes.FETCH_OVERLAYS, onFetchOverlays);
const onNameSelectedSaga = takeLatest(actionTypes.NAME_SELECTED, onNameSelected);
const onCustomizeOverlaySaga = takeLatest(actionTypes.LOAD_CUSTOMIZE_OVERLAY, onCustomizeOverlay);
const onGetOverlaySaga = takeLatest(actionTypes.GET_OVERLAY, onGetOverlay);
const onSaveCustomizedOverlaySaga = takeLatest(actionTypes.SAVE_CUSTOMIZED_OVERLAY, onSaveCustomizedOverlay);
export default [
    onFetchOverlaysSaga,
    onNameSelectedSaga,
    onCustomizeOverlaySaga,
    onGetOverlaySaga,
    onSaveCustomizedOverlaySaga,
];