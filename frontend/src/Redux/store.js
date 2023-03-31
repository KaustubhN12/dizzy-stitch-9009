import { legacy_createStore, combineReducers, applyMiddleware ,compose} from "redux";
import thunk from "redux-thunk";
import {reducer as restaurantReducer} from "./Restaurants/Reducer"
import { Orderreducer } from "./Order/reducer.order";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    restaurantReducer,
    Orderreducer
});
export const store = legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)));
