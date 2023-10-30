import type { Game, GameID } from '../features/games/types';
import type { Player, PlayerID } from '../features/players/type';

export type GamesState = {
  game: Game[];
};
export type PlayersState = {
  players: Players[];
};
export type AuthState = {
  auth: Player | undefined;
};

export type Action =
  | { type: 'games/load'; payload: Game[] }
  | { type: 'games/update'; payload: GameID[] }
  | { type: 'players/load'; payload: Player }
  | { type: 'players/remove'; payload: PlayerID }
  | { type: 'players/add'; payload: Player[] }
  | { type: 'auth/checkPlayer'; payload: Player }
  | { type: 'auth/logOut' }
  | { type: 'auth/sign-in'; payload: Player[] };
