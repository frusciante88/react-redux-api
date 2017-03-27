import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  users: []
};

const homeReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_USER:
      return Object.assign({}, state, { users: action.users });    

  }

  return state;

}

export default homeReducer;