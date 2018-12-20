import * as types from '../constants/types';

const initialState = {
  data: [],
  theme: 'light',
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_THEME:
      return { ...state, ...payload };
    default:
      return state;
  }
}
