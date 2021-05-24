import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './LoginView.scss';
import authOperations from '../../redux/auth/auth-operations';
import { FiMail } from 'react-icons/fi';

import { IoMdKey } from 'react-icons/io';

export default function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const handleEmailChange = e => {
    setEmail(e.currentTarget.value);
  };

  const [password, setPassword] = useState('');
  const handlePasswordChange = e => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <section className="login">
      {/* <p>frame2010@gmail.com</p>
        <p>Frame123456</p> */}
      <h1 className="login__title">Login form</h1>

      <form className="login-form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="login-form__wrapper">
          <label className="login-form__label" htmlFor="email">
            E-mail
          </label>
          <div className="login-form__input-wrapper">
            <input
              id="email"
              className="login-form__input"
              type="text"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <FiMail className="login-form__input-icon" />
          </div>
        </div>

        <div className="login-form__wrapper">
          <label htmlFor="password " className="login-form__label">
            Password
          </label>
          <div className="login-form__input-wrapper">
            <input
              id="password"
              className="login-form__input"
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <IoMdKey className="login-form__input-icon" />
          </div>
        </div>

        <button className="login-form__btn" type="submit">
          Login
        </button>
      </form>
    </section>
  );
}
