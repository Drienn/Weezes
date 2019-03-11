import { combineReducers } from 'redux';
import theme from './themeReducer';

const combinedReducer = combineReducers({
  theme,
});

// Dan Abramov's method for clearing out a store upon user logout
const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export default rootReducer;
