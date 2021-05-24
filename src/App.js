import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import ContactsView from './view/ContactsView/ContactsView';
import HomeView from './view/HomeView/HomeView';
import RegistarionView from './view/RegistarationView/RegistationView';
import LoginView from './view/LoginView/LoginView';
import Footer from './components/Footer';

import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.css';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <ReactNotification isMobile="true" />

        <Navigation />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <PrivateRoute
            path="/contacts"
            component={ContactsView}
            redirectTo="/login"
          />
          <PublicRoute
            restricted
            path="/registration"
            component={RegistarionView}
            redirectTo="/contacts"
          />
          <PublicRoute
            path="/login"
            restricted
            component={LoginView}
            redirectTo="/contacts"
          />
        </Switch>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
