import * as types from '../constants/types';

export const setTheme = theme => (dispatch) => {
  dispatch({
    type: types.SET_THEME,
    payload: { theme },
  });
};

// export const getCallback = data => dispatch => {
//   dispatch({
//     type: types.SET_THEME,
//     payload: { data }
//   });
// };

// export const getTheme = () => dispatch => {
//   dispatch({
//     type: types.API,
//     payload: {
//       method: 'get',
//       path: '/theme',
//       success: data => successCallback(data)
//     }
//   });
// };

export default setTheme;
