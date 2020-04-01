import { takeLatest, put } from 'redux-tale/es/effects';
import * as actionTypes from './actiontypes';
import * as actions from './actions';
import { redirectTo } from 'modules';
import { showToast } from 'utils/ui';
import { stateHelper } from 'app/selectors';
import { getSelectedOverlay } from './selectors';

const serverData = [
    { id: 1, name: 'Mineral water', createdOn: '12/30/2019 09:57 AM' },
    { id: 1, name: 'Cadbury', createdOn: '12/30/2019 09:57 AM' },
    { id: 1, name: 'Save water campaign', createdOn: '01/04/2019 09:57 AM' },
    { id: 1, name: 'Try', createdOn: '1/30/2020 09:57 AM' },
    { id: 1, name: 'Try', createdOn: '1/30/2020 09:57 AM' },
    { id: 1, name: 'Try', createdOn: '1/30/2020 09:57 AM' },
    { id: 1, name: 'Try', createdOn: '1/30/2020 09:57 AM' },
    { id: 1, name: 'Try', createdOn: '1/30/2020 09:57 AM' },
    { id: 1, name: 'Try', createdOn: '1/30/2020 09:57 AM' },
    { id: 1, name: 'Try', createdOn: '1/30/2020 09:57 AM' },
    { id: 1, name: 'Try', createdOn: '1/30/2020 09:57 AM' },
    { id: 1, name: 'Try', createdOn: '1/30/2020 09:57 AM' },
    { id: 1, name: 'Try', createdOn: '1/30/2020 09:57 AM' },
    { id: 1, name: 'Try', createdOn: '1/30/2020 09:57 AM' },
    { id: 1, name: 'Try', createdOn: '1/30/2020 09:57 AM' },
    { id: 1, name: 'Try', createdOn: '1/30/2020 09:57 AM' },
];

function* onFetchOverlays() {
    try {
        const result = yield Promise.resolve(serverData);
        yield put(actions.onFetchOverlaysSuccess(result));
    } catch (error) {
        console.error(error);
    }
}

function* saveSelectedOverlay(selected) {
    //Save the Selected overlay properties
    yield put(actions.onSaveCustomizedOverlay(selected));
}

function* onNameSelected() {
    try {
        const selectedOverlay = stateHelper(getSelectedOverlay);
        yield saveSelectedOverlay(selectedOverlay);
    } catch (e) {
        console.error(e);
    }
}

function* onSavedOverlay({ overlay }) {
    yield put(actions.loadCustomizeOverlay(overlay));
}

function* onCustomizeOverlay() {
    redirectTo('/overlay/customize');
}

const onFetchOverlaysSaga = takeLatest(actionTypes.FETCH_OVERLAYS, onFetchOverlays);
const onNameSelectedSaga = takeLatest(actionTypes.NAME_SELECTED, onNameSelected);
const onSaveOverlaySaga = takeLatest(actionTypes.SAVE_CUSTOMIZE_OVERLAY_SUCCESS, onSavedOverlay);
const onCustomizeOverlaySaga = takeLatest(actionTypes.LOAD_CUSTOMIZE_OVERLAY, onCustomizeOverlay);

export default [
    onFetchOverlaysSaga,
    onNameSelectedSaga,
    onCustomizeOverlaySaga,
    onSaveOverlaySaga,
];