import React from 'react';
import Advantages from '../../components/Advantages';
import './HomeView.scss';

export default function HomeView() {
  return (
    <>
      <section className="HomeView">
        <h1 className="HomeView-title">Welcome to the Phonebook App</h1>
      </section>
      <Advantages />
    </>
  );
}
