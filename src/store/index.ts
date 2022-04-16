import { createStore } from 'redux';

import houseReducer from './reducers/house';

const store = createStore(houseReducer)

export default store