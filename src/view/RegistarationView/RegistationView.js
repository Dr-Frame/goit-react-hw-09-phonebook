import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { FiMail } from 'react-icons/fi';
import { IoMdKey } from 'react-icons/io';
import { FaUserEdit } from 'react-icons/fa';

import './RegistrationView.scss';

export default function RegistrationView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <h1 className="register__title">Registration form</h1>
      <form
        className="register-form"
        onSubmit={handleSubmit}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
