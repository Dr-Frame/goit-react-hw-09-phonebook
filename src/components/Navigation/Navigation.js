import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav';
import UserNav from '../UserNav';

import './Navigation.scss';
import authSelectors from '../../redux/auth/auth-selectors';
import { MdLocalLibrary } from 'react-icons/md';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header>
      <div className="container">
        <nav className="header-nav">
          <div className="header-nav__wrapper">
            <NavLink className="header-nav__logo" exact to="/">
              <MdLocalLibrary className="header-nav__logo-icon" />
            </NavLink>
            <NavLink
              className="header-nav__item"
              activeClassName="header-nav__item--active"
              exact
              to="/"
            >
              Main
            </NavLink>
            {isAuthenticated && (
              <NavLink
                className="header-nav__item"
                activeClassName="header-nav__item--active"
                exact
                to="/contacts"
              >
                Contacts
              </NavLink>
            )}
          </div>

          {!isAuthenticated ? <AuthNav /> : <UserNav />}
        </nav>
      </div>
    </header>
  );
}
