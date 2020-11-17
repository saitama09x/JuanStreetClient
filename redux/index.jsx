import search_reducers from './client-reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    search: search_reducers
});

export default rootReducer;