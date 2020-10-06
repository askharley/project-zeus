import { createActions } from "redux-actions";
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  current: {}
};

export const actionCreators = createActions({}, 'SET_CHARACTERS', 'SET_CHARACTER');

export const reducer = createReducer(initialState, {
  [actionCreators.setCharacters]: (state, action) => {
    state.list = action.payload;
  },
  [actionCreators.setCharacter]: (state, action) => {
    state.current = action.payload;
  }
});
