import React from 'react';
import type { Player, PlayerID } from './type';
import { useAppDispatch } from '../../redux/store';
import { fetchPlayerDelete } from '../../App/api';

const PlayerItem = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const onHandleDelete = (id: PlayerID): void => {
    fetchPlayerDelete(id)
      .then((data) => data)
      .catch(console.log);
  };

  return (
    <div className="player__container">
      <h2>{player.name}</h2>
      <img className="player__img" src={player.avatar} alt="avatar" />
      <h5>{player.email}</h5>
      <button onClick={() => onHandleDelete(player.id)} type="button">
        Delete
      </button>
    </div>
  );
};

export default PlayerItem;
