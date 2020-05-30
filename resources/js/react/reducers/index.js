import { combineReducers } from 'redux'
import eventsReducer from './events'

const reducers = combineReducers({
   events: eventsReducer
})

export default reducers;