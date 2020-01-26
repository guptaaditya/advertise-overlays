import createTaleMiddleware from 'redux-tale/es/';

import loginSagas from 'modules/login/saga';
import redirectSagas from 'modules/redirect/saga';

let sagaMiddleware;

const sagas = [
    ...loginSagas,
    ...redirectSagas,
];

export function createSagaMiddleWare() {
    sagaMiddleware = createTaleMiddleware();
    return sagaMiddleware;
}

export function runSagas() {
    sagas.map(saga => sagaMiddleware.run(saga));
}