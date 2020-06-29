import { combineReducers } from "redux";
import eventReducer from "./events";
import speakersReducer from "./speakers";

const reducers = combineReducers({
    events: eventReducer,
    speakers: speakersReducer
});

export default reducers;
