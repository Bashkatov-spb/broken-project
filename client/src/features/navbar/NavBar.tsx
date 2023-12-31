import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './NavBar.scss';
import logo from '../../assets/fox.png';
import { useAppDispatch, type RootState } from '../../redux/store';
import { fetchLogOut } from '../../App/api';

const NavBar = (): JSX.Element => {
  const player = useSelector((store: RootState) => store.auth.auth);
  const dispatch = useAppDispatch();

  const logOut = (): void => {
    fetchLogOut()
      .then((data) => data.message === 'success' && dispatch({ type: 'auth/logOut' }))
      .catch(console.log);
  };
  return (
    <>
      <div className="nav__container">
        <ul className="nav__menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/players">Players</NavLink>
          </li>
          <li>
            <NavLink to="/games">Games</NavLink>
          </li>
          {!player ? (
            <>
              <li>
                <NavLink to="/auth/sign-in">Sign-in</NavLink>
              </li>
              <li>
                <NavLink to="/auth/sign-up">Sign-up</NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink onClick={logOut} to="/">
                logout{' '}
              </NavLink>
            </li>
          )}
        </ul>
        <img className="nav__logo" src={logo} alt="logo" />
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
