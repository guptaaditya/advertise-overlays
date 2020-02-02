import createTaleMiddleware from 'redux-tale/es/';

import loginSagas from 'modules/login/saga';
import overlaysSagas from 'modules/overlays/saga';
import linksSagas from 'modules/links/saga';

let sagaMiddleware;

const sagas = [
    ...loginSagas,
    ...overlaysSagas,
    ...linksSagas,
];

export function createSagaMiddleWare() {
    sagaMiddleware = createTaleMiddleware();
    return sagaMiddleware;
}

export function runSagas() {
    sagas.map(saga => sagaMiddleware.run(saga));
}