import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.scss';

export default function AuthNav() {
  return (
    <div className="header-authnav">
      <NavLink
        className="header-nav__item"
        activeClassName="header-nav__item--active"
        exact
        to="/registration"
      >
        Registration
      </NavLink>
      <NavLink
        className="header-nav__item"
        activeClassName="header-nav__item--active"
        exact
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
}
