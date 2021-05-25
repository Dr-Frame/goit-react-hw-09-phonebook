import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch } from 'react-redux';
import Navigation from './components/Navigation';
/* import ContactsView from './view/ContactsView/ContactsView'; */
/* import HomeView from './view/HomeView/HomeView'; */
/* import RegistarionView from './view/RegistarationView/RegistationView';
import LoginView from './view/LoginView/LoginView'; */
import Footer from './components/Footer';

import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Spinner from './components/Spinner';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.css';

const HomeView = lazy(() =>
  import('./view/HomeView/HomeView' /* webpackChunkName: "HomePage" */),
);
const ContactsView = lazy(() =>
  import(
    './view/ContactsView/ContactsView' /* webpackChunkName: "ContactsView" */
  ),
);
const RegistarionView = lazy(() =>
  import(
    './view/RegistarationView/RegistationView' /* webpackChunkName: "RegistarionView" */
  ),
);

const LoginView = lazy(() =>
  import('./view/LoginView/LoginView' /* webpackChunkName: "LoginView" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ReactNotification isMobile="true" />

      <Navigation />

      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
          <PublicRoute restricted path="/registration" redirectTo="/contacts">
            <RegistarionView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
        </Switch>
      </Suspense>

      <Footer />
    </>
  );
}
