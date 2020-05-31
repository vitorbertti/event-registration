import { combineReducers } from 'redux'
import batchesReducer from './batches'
import socialNetworks  from './socialNetworks'

const reducers = combineReducers({
   batches: batchesReducer,
   socialNetworks: socialNetworks
})

export default reducers;