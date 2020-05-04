import { takeLatest, put } from 'redux-tale/es/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';

const affiliatesData = [
    { id: 1, name: 'Hayk', affiliate1: 3, affiliate2: 7 },
    { id: 2, name: 'Isabella', affiliate1: 2, affiliate2: 1 },
    { id: 3, name: 'William', affiliate1: 1, affiliate2: 0 },
    { id: 4, name: 'Noah', affiliate1: 5, affiliate2: 30 },
    { id: 5, name: 'Emma', affiliate1: 10, affiliate2: 2 },
    { id: 6, name: 'Dave', affiliate1: 4, affiliate2: 0 },
    { id: 7, name: 'James', affiliate1: 1, affiliate2: 1 },
];

function* onGetAffiliates() {
    try {
        const result = yield Promise.resolve(true);
        yield put(actions.onGetAffiliatesSuccess(affiliatesData));
    } catch (error) {
        console.error(error);
    }
}

const onGetAffiliatesSaga = takeLatest(actionTypes.GET_AFFILIATES, onGetAffiliates);

export default [
    onGetAffiliatesSaga,
];