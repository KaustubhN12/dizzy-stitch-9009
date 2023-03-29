import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {reducer as restaurantReducer} from "./Restaurants/Reducer"

const rootReducer = combineReducers({
    restaurantReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
