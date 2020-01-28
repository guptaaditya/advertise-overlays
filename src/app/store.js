import { createStore, applyMiddleware, compose } from 'redux';
import combinedReducers from './reducers';
import { createSagaMiddleWare, runSagas } from './sagas';
import { loadStateToken, saveStateToken} from 'utils/helper';

export default function initStore() {
    const store = createStore(
        combinedReducers,
        loadStateToken(),
        compose(
            applyMiddleware(createSagaMiddleWare())
        )
    );
    store.subscribe(() => saveStateToken(store.getState()));
    runSagas();
    return store;
}
