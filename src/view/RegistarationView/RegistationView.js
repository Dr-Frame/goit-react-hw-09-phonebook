import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { FiMail } from 'react-icons/fi';
import { IoMdKey } from 'react-icons/io';
import { FaUserEdit } from 'react-icons/fa';
import classnames from 'classnames';
import shortid from 'shortid';
import './RegistrationView.scss';
import { VscWarning } from 'react-icons/vsc';

import { useForm } from 'react-hook-form';

export default function RegistrationView() {
  const dispatch = useDispatch();

  const formInputID = {
    nameInput: shortid.generate(),
    emailInput: shortid.generate(),
    passwordInput: shortid.generate(),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    dispatch(authOperations.register(data));
  };

  return (
    <section className="register">
      <div className="container register__container">
        <h1 className="register__title">Registration form</h1>
        <form
          className="register-form"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div className="register-form__block-wrapper">
            <label
              className="register-form__label"
              htmlFor={formInputID.nameInput}
            >
              Name
            </label>
            <div className="register-form__input-wrapper">
              <input
                className="register-form__input"
                type="text"
                name="name"
                placeholder="Boris"
                id={formInputID.nameInput}
                {...register('name', {
                  required: true,
                  validate: value => value.length > 3,
                })}
              />

              <FaUserEdit className="register-form__input-icon" />
            </div>
            {errors.name && (
              <div className="validation">
                <VscWarning className="validation__icon" />
                <p className="validation__text">Your name is too short</p>
              </div>
            )}
          </div>

          <div className="register-form__block-wrapper">
            <label
              className="register-form__label"
              htmlFor={formInputID.emailInput}
            >
              E-mail
            </label>
            <div className="register-form__input-wrapper">
              <input
                className="register-form__input"
                type="email"
                name="email"
                id={formInputID.emailInput}
                placeholder="yourmail@mail.com"
                {...register('email', {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  validate: value => value.length > 0,
                })}
              />
              <FiMail className="register-form__input-icon" />
            </div>

            {errors.email && (
              <div className="validation">
                <VscWarning className="validation__icon" />
                <p className="validation__text">
                  This field shouldn't be empty
                </p>
              </div>
            )}
          </div>

          <div className="register-form__block-wrapper">
            <label
              className="register-form__label"
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
                {...register('password', {
                  validate: {
                    badWord: value => value.trim().toLowerCase() !== 'password',
                    shortPassword: value => value.length > 6,
                  },
                })}
                placeholder="******"
              />
              <IoMdKey className="register-form__input-icon" />
            </div>

            {errors.password && errors.password.type === 'badWord' && (
              <div className="validation">
                <VscWarning className="validation__icon" />
                <p className="validation__text">
                  Your password shouldn't contains word 'password'
                </p>
              </div>
            )}
            {errors.password && errors.password.type === 'shortPassword' && (
              <div className="validation">
                <VscWarning className="validation__icon" />
                <p className="validation__text">
                  Your password can't be shorter than 6 symbols
                </p>
              </div>
            )}
          </div>

          <button className="register-form__btn" type="submit">
            Register account
          </button>
        </form>
      </div>
    </section>
  );
}
