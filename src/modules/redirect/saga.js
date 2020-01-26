import * as actions from './actions';
import * as actionTypes from './actiontypes';
import { takeLatest } from 'redux-tale/es/effects';

function onRedirect({ url }) {
    actions.redirectTo(url);
}

const onRedirectSaga = takeLatest(actionTypes.REDIRECT_TO_URL, onRedirect);

export default [
    onRedirectSaga,
];