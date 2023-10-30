/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { Game } from '../features/games/types';
import type { Player, PlayerID } from '../features/players/type';

export const fetchGames = async (): Game[] => {
  const res = await fetch('/api/games');
  return res.json();
};

export const fetchPlayers = async (): Player[] => {
  const res = await fetch('/api/players');
  return res.json();
};

export const fetchPlayerDelete = async (id: PlayerID): Promise<{ message: string }> => {
  const res = await fetch(`/api/${id}`, {
    method: 'delete',
  });
  return res.json();
};

export const fetchCheckPlayer = async (): Promise<Player> => {
  const res = await fetch('/api/auth/check');
  return res.json();
};

export const fetchLogOut = async (): Promise<{ message: string }> => {
  const res = await fetch('/auth/logout');
  const data: { message: string } = await res.json();
  return data;
};
