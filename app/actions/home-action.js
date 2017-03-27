import * as types from '../actions/action-types';

export function getUser(users) {
  return {
    type: types.GET_USER,
    users
  };
}