import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import tokenReducer from './tokenDucks';
import configReducer from './configDucks';
import facturaReducer from './facturaDucks';

const rootReducer = combineReducers({
    token: tokenReducer,
    config: configReducer,
    factura: facturaReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}