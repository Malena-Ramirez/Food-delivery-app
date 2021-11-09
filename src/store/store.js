import userReducer from "../reducers/userReducer";
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import loggedReducer from "../reducers/loggedReducer";
import restaurantsReducer from "../reducers/restaurantsReducer";
import deliveryReducer from "../reducers/deliveryReducer";
import restaurantSelectedReducer from "../reducers/restaurantSelectedReducer";
import restaurantSearchReducer from "../reducers/restaurantSearchReducer";

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    user: userReducer,
    logged: loggedReducer,
    restaurants: restaurantsReducer,
    deliveryStatus: deliveryReducer,
    restaurantSelected: restaurantSelectedReducer,
    restaurantSearch: restaurantSearchReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)