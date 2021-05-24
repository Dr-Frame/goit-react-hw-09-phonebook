import React from 'react';
import './UserNav.scss';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import { FaUserCircle } from 'react-icons/fa';

export default function UserNav() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className="UserNav__wrapper">
      <div className="UserNav__user-data-wrapper">
        <p className="UserNav__user-name">Hi, {name}</p>
        <FaUserCircle className="UserNav__logo" />
      </div>

      <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        className="UserNav__btn"
      >
        Logout
      </button>
    </div>
  );
}
