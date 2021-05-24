import React, { Component } from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import Advantages from '../../components/Advantages';
import './HomeView.scss';

class HomeView extends Component {
  render() {
    return (
      <>
        <section className="HomeView">
          <h1 className="HomeView-title">Welcome to the Phonebook App</h1>
        </section>
        <Advantages />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(HomeView);
