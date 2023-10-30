/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import type { Player } from './type';
import { useAppDispatch } from '../../redux/store';

const AddPlayerForm = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const onHandlePlayerAdd = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const res = await fetch('/api/players', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        age,
        avatar,
        email,
        password,
      }),
    });
    const data: Player = await res.json();
    // dispatch({ type: 'players/add', payload: data });
  };

  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onHandlePlayerAdd}>
        <label htmlFor="">
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" />
        </label>
        <label htmlFor="">
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="text"
          />
        </label>
        <label htmlFor="">
          Avatar
          <input
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            name="avatar"
            type="text"
          />
        </label>
        <label htmlFor="">
          Age
          <input value={age} onChange={(e) => setAge(e.target.value)} name="age" type="number" />
        </label>
        <label htmlFor="">
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="text"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPlayerForm;
