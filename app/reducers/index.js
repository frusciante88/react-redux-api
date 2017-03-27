import { combineReducers } from 'redux';
import homeReducer from './home-reduces';

var reducers = combineReducers({
    homeState: homeReducer
});

export default reducers;