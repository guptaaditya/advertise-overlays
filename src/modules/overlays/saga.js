import { takeLatest, put } from 'redux-tale/es/effects';
import * as actionTypes from './actiontypes';
import * as actions from './actions';
import { showToast } from 'utils/ui';


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
        console.log(error);
    }
}

const onFetchOverlaysSaga = takeLatest(actionTypes.FETCH_OVERLAYS, onFetchOverlays);

export default [
    onFetchOverlaysSaga,
];