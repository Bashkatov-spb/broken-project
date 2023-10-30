import React from 'react';
import { useSelector } from 'react-redux';
import './Players.scss';
import PlayerItem from './PlayerItem';
import AddPlayerForm from './AddPlayerForm';
import type { RootState } from '../../redux/store';
import { Player } from './type';

const PlayersPage = (): JSX.Element => {
  // const players = useSelector((store: RootState) => store.players.players);
  const players: Array<Player> = [];
  return (
    <div className="players__container">
      <AddPlayerForm />
      {players.map((player) => (
        <PlayerItem key={player.id} player={player} />
      ))}
    </div>
  );
};

export default PlayersPage;
