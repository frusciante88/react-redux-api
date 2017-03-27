import { combineReducers } from 'redux';
import homeReducer from './home-reduces';

// Combine Reducers
var reducers = combineReducers({
    homeState: homeReducer
});

export default reducers;