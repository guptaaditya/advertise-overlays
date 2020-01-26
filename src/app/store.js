import { createStore, applyMiddleware, compose } from 'redux';
import combinedReducers from './reducers';
import { createSagaMiddleWare, runSagas } from './sagas';

export default function initStore() {
    const store = createStore(
        combinedReducers,
        compose(
            applyMiddleware(createSagaMiddleWare())
        )
    );
    
    runSagas();
    return store;
}
