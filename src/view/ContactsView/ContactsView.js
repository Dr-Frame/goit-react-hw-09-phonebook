import React from 'react';
import Phonebook from '../../components/Phonebook';
import Contacts from '../../components/Contacts';
import Filter from '../../components/Filter';
import './ContactsView.scss';

const ContactsView = () => (
  <main className="main">
    <section className="Phonebook">
      <h1 className="Phonebook__title">Phonebook</h1>
      <Phonebook />
    </section>

    <section className="Contacts">
      <h2 className="Contacts__title">Contacts</h2>
      <Filter />
      <Contacts />
    </section>
  </main>
);

export default ContactsView;
