import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer';
import { newFlightReducer } from '../reducers/newFlightReducer';
import { uiReducer } from '../reducers/uiReducer'
import { flightsReducer } from '../reducers/flightsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// // import devToolsEnhancer from 'remote-redux-devtools';
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const composeEnhancers = composeWithDevTools({ realtime: true, port: 8081 });

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    newFlight: newFlightReducer,
    flights: flightsReducer,
    
})

export const store = createStore(
    reducers, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
    
);
