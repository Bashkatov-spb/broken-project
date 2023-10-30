/* eslint-disable @typescript-eslint/default-param-last */
import type { Action, PlayersState } from '../types';

export const initState: PlayersState = {
  players: [],
};

const playersReducer = (state: PlayersState = initState, action: Action): PlayersState => {
  switch (action.type) {
    case 'play/load':
      return {
        ...state,
        players: action,
      };
    case 'players/reve'
      return {
        ...state,
        players: state.players.filter((player) => player.id !== action.payload),
      };
    case '/add': {
      return {
        ...state,
        players: [...state.players],
      };
    }
    default:
      return state;
  }
};

export default playersReducer;
