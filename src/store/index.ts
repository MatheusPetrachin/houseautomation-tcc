import { combineReducers, createStore } from 'redux';

import houseReducer from './reducers/house';
import authReducer from './reducers/auth'

const reducers = combineReducers({
  house: houseReducer,
  auth: authReducer
})

export type RootState = ReturnType<typeof reducers>

const store = createStore(reducers)

export default store