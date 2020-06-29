import { combineReducers } from "redux";
import batchesReducer from "./batches";
import socialNetworksReducer from "./socialNetworks";
import eventReducer from "./events";

const reducers = combineReducers({
    batches: batchesReducer,
    socialNetworks: socialNetworksReducer,
    events: eventReducer
});

export default reducers;
