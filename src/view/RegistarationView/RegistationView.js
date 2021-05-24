import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import { FiMail } from 'react-icons/fi';
import { IoMdKey } from 'react-icons/io';
import { FaUserEdit } from 'react-icons/fa';

import './RegistrationView.scss';

class RegistrationView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);

    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { isErrorExist } = this.props;
    const { name, email, password } = this.state;

    return (
      <section className="register">
        <h1 className="register__title">Registration form</h1>
        <form
          className="register-form"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <div className="register-form__block-wrapper">
            <label className="register-form__label">Name</label>
            <div className="register-form__input-wrapper">
              <input
                className="register-form__input"
                type="text"
                name="name"
                value={name}
                onChange={this.handleInputChange}
              />
              <FaUserEdit className="register-form__input-icon" />
            </div>
          </div>

          <div className="register-form__block-wrapper">
            <label className="register-form__label">E-mail </label>
            <div className="register-form__input-wrapper">
              <input
                className="register-form__input"
                type="text"
                name="email"
                value={email}
                onChange={this.handleInputChange}
              />
              <FiMail className="register-form__input-icon" />
            </div>
          </div>

          <div className="register-form__block-wrapper">
            <label className="register-form__label">Password </label>
            <div className="register-form__input-wrapper">
              <input
                className="register-form__input"
                type="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
              />
              <IoMdKey className="register-form__input-icon" />
            </div>
          </div>

          <button className="register-form__btn" type="submit">
            Register account
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isErrorExist: authSelectors.getApiError(state),
});

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationView);
