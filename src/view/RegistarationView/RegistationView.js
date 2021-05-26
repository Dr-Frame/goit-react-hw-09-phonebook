import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { FiMail } from 'react-icons/fi';
import { IoMdKey } from 'react-icons/io';
import { FaUserEdit } from 'react-icons/fa';
import classnames from 'classnames';
import shortid from 'shortid';
import './RegistrationView.scss';

export default function RegistrationView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNameInputInFocus, setIsNameInputInFocus] = useState(false);
  const [isEmailInputInFocus, setIsEmailInputInFocus] = useState(false);
  const [isPasswordInputInFocus, setIsPasswordInputInFocus] = useState(false);

  const handleFormInputChange = {
    inputNameOnFocus: function () {
      setIsNameInputInFocus(true);
    },
    inputNameOnBlur: function () {
      setIsNameInputInFocus(false);
    },

    inputEmailOnFocus: function () {
      setIsEmailInputInFocus(true);
    },
    inputEmailOnBlur: function () {
      setIsEmailInputInFocus(false);
    },

    inputPasswordOnFocus: function () {
      setIsPasswordInputInFocus(true);
    },
    inputPasswordOnBlur: function () {
      setIsPasswordInputInFocus(false);
    },
  };

  const formInputID = {
    nameInput: shortid.generate(),
    emailInput: shortid.generate(),
    passwordInput: shortid.generate(),
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <section className="register">
      <div className="container register__container">
        <h1 className="register__title">Registration form</h1>
        <form
          className="register-form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="register-form__block-wrapper">
            <label
              className={classnames('register-form__label', {
                'register-form__label--hover': isNameInputInFocus,
              })}
              htmlFor={formInputID.nameInput}
            >
              Name
            </label>
            <div className="register-form__input-wrapper">
              <input
                className="register-form__input"
                type="text"
                name="name"
                id={formInputID.nameInput}
                value={name}
                onFocus={handleFormInputChange.inputNameOnFocus}
                onBlur={handleFormInputChange.inputNameOnBlur}
                onChange={handleInputChange}
              />
              <FaUserEdit className="register-form__input-icon" />
            </div>
          </div>

          <div className="register-form__block-wrapper">
            <label
              className={classnames('register-form__label', {
                'register-form__label--hover': isEmailInputInFocus,
              })}
              htmlFor={formInputID.emailInput}
            >
              E-mail
            </label>
            <div className="register-form__input-wrapper">
              <input
                className="register-form__input"
                type="text"
                name="email"
                id={formInputID.emailInput}
                value={email}
                onFocus={handleFormInputChange.inputEmailOnFocus}
                onBlur={handleFormInputChange.inputEmailOnBlur}
                onChange={handleInputChange}
              />
              <FiMail className="register-form__input-icon" />
            </div>
          </div>

          <div className="register-form__block-wrapper">
            <label
              className={classnames('register-form__label', {
                'register-form__label--hover': isPasswordInputInFocus,
              })}
              htmlFor={formInputID.passwordInput}
            >
              Password
            </label>
            <div className="register-form__input-wrapper">
              <input
                className="register-form__input"
                type="password"
                name="password"
                id={formInputID.passwordInput}
                value={password}
                onFocus={handleFormInputChange.inputPasswordOnFocus}
                onBlur={handleFormInputChange.inputPasswordOnBlur}
                onChange={handleInputChange}
              />
              <IoMdKey className="register-form__input-icon" />
            </div>
          </div>

          <button className="register-form__btn" type="submit">
            Register account
          </button>
        </form>
      </div>
    </section>
  );
}
