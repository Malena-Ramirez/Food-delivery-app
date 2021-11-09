import userReducer from "../reducers/userReducer";
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import loggedReducer from "../reducers/loggedReducer";

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    user: userReducer,
    logged: loggedReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)