import * as types from '../actions/action-types';

export function getUserSuccess(users) {
  return {
    type: types.GET_USER,
    users
  };
}