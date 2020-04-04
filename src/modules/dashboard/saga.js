import { takeLatest, put } from 'redux-tale/es/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { redirectTo } from 'modules';
import { showToast } from 'utils/ui';
import { stateHelper } from 'app/selectors';
import { getSelectedOverlay } from './selectors';

const stats = [
    { name: 'Site Visits', value: 121 },
    { name: 'Overlays', value: 26 },
    { name: 'Links', value: 32 },
];

const links = [
    { 
        id: 1, 
        shortUrl: 'http://utv.com/v/sduh4hq', 
        visits: 23 
    },
    { 
        id: 2, 
        shortUrl: 'http://utv.com/v/tfygu54', 
        visits: 21 
    },
    { 
        id: 3, 
        shortUrl: 'http://utv.com/v/kop76fl', 
        visits: 17 
    },
    { 
        id: 4, 
        shortUrl: 'http://utv.com/v/pksd5ds', 
        visits: 11 
    },
    { 
        id: 5, 
        shortUrl: 'http://utv.com/v/pksd5ds', 
        visits: 6 
    },
];

const overlays = [
    { id: 1, name: 'Ad Mineral water', visits: 13 },
    { id: 2, name: 'Commercials Cadbury', visits: 10 },
    { id: 3, name: 'Save water campaign', visits: 9 },
    { id: 4, name: 'Use to views', visits: 4 },
    { id: 5, name: 'Test', visits: 1 },
];

function* onGetStats() {
    try {
        const result = yield Promise.resolve(stats);
        yield put(actions.onGetStatsSuccess(result));
    } catch (error) {
        console.error(error);
        yield put(actions.onGetStatsFailure(error));
    }
}

function* onGetLinks() {
    try {
        const result = yield Promise.resolve(links);
        yield put(actions.onGetLinksSuccess(result));
    } catch (error) {
        console.error(error);
        yield put(actions.onGetLinksFailure(error));
    }
}

function* onGetOverlays() {
    try {
        const result = yield Promise.resolve(overlays);
        yield put(actions.onGetOverlaysSuccess(result));
    } catch (error) {
        console.error(error);
        yield put(actions.onGetOverlaysFailure(error));
    }
}

const onGetStatsSaga = takeLatest(actionTypes.GET_STATS, onGetStats);
const onGetLinksSaga = takeLatest(actionTypes.GET_STATS, onGetLinks);
const onGetOverlaysSaga = takeLatest(actionTypes.GET_STATS, onGetOverlays);

export default [
    onGetStatsSaga,
    onGetLinksSaga,
    onGetOverlaysSaga,
];