import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './LoginView.scss';
import authOperations from '../../redux/auth/auth-operations';
import { FiMail } from 'react-icons/fi';
import { IoMdKey } from 'react-icons/io';
import shortid from 'shortid';
import { VscWarning } from 'react-icons/vsc';
import { useForm } from 'react-hook-form';

export default function LoginView() {
  const dispatch = useDispatch();

  const formInputID = {
    emailInput: shortid.generate(),
    passwordInput: shortid.generate(),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(authOperations.logIn(data));
  };

  return (
    <section className="login">
      <div className="container">
        <h1 className="login__title">Login form</h1>

        <form
          className="login-form"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="login-form__wrapper">
            <label
              className="login-form__label"
              htmlFor={formInputID.emailInput}
            >
              E-mail
            </label>
            <div className="login-form__input-wrapper">
              <input
                id={formInputID.emailInput}
                className="login-form__input"
                type="email"
                name="email"
                {...register('email', {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  validate: value => value.length > 0,
                })}
              />
              <FiMail className="login-form__input-icon" />
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

          <div className="login-form__wrapper">
            <label
              htmlFor={formInputID.passwordInput}
              className="login-form__label"
            >
              Password
            </label>
            <div className="login-form__input-wrapper">
              <input
                id={formInputID.passwordInput}
                className="login-form__input"
                type="password"
                name="password"
                {...register('password', {
                  required: true,
                  validate: value => value !== '',
                })}
              />
              <IoMdKey className="login-form__input-icon" />
            </div>
            {errors.password && (
              <div className="validation">
                <VscWarning className="validation__icon" />
                <p className="validation__text">
                  This field shouldn't be empty
                </p>
              </div>
            )}
          </div>

          <button className="login-form__btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
