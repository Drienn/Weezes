import { combineReducers } from 'redux';
import theme from './themeReducer';

const combinedReducer = combineReducers({
  theme,
});

// Dan Abramov's method for clearing out a store upon user logout
const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === 'USER_LOGOUT') {
    newState = undefined;
  }

  return combinedReducer(newState, action);
};

export default rootReducer;
