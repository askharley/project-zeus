import { createActions } from "redux-actions";
import { createReducer } from '@reduxjs/toolkit';

const initialState = {};

export const actionCreators = createActions({}, 'SET_AUTH_USER', 'CLEAR_AUTH_USER');

export const reducer = createReducer(initialState, {
  [actionCreators.setAuthUser]: (state, action) => {
    state.current = action.payload;
  },
  [actionCreators.clearAuthUser]: (state) => {
    state.current = null;
  }
});
