import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
// import playersReducer from './playersReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  games: gamesReducer,
  // players: playersReducer,
  auth: authReducer,
});

export default rootReducer;
