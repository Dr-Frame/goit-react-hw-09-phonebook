import React from 'react';
import Advantages from '../../components/Advantages';
import './HomeView.scss';

export default function HomeView() {
  return (
    <>
      <section className="HomeView">
        <div className="container HomeView__container ">
          <h1 className="HomeView-title">Welcome to the Phonebook App</h1>
        </div>
      </section>
      <Advantages />
    </>
  );
}
