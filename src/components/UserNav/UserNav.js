import React from 'react';
import './UserNav.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import { FaUserCircle } from 'react-icons/fa';

const UserNav = ({ name, onLogout }) => {
  return (
    <div className="UserNav__wrapper">
      <div className="UserNav__user-data-wrapper">
        <p className="UserNav__user-name">Hi, {name}</p>
        <FaUserCircle className="UserNav__logo" />
      </div>

      <button type="button" onClick={onLogout} className="UserNav__btn">
        Logout
      </button>
    </div>
  );
};

UserNav.propTypes = {
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
