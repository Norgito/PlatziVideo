import React from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginRequest, logoutRequest } from "../actions";

import { Link } from "react-router-dom";
import gravatar from "../utils/gravatar";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const Header = () => {
  const { user } = useSelector((state) => state);
  const hasUser = Object.keys(user).length > 0;
  const userAvatar = user && user.email ? gravatar(user.email) : userIcon;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutRequest({}));
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userAvatar} alt="" />

          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">{user.name}</a>
            </li>
          ) : null}

          {hasUser ? (
            <li>
              <a href="#logout" onClick={handleLogout}>
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func,
}

export default Header;
