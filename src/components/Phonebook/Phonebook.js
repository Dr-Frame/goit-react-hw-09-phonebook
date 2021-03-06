import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import contactOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import './Phonebook.scss';
import { FaUserEdit } from 'react-icons/fa';
import { BiPhoneCall } from 'react-icons/bi';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

export default function Phonebook() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactBase = useSelector(contactsSelectors.getContactBase);

  const contactCreateList = () => {
    const nameToCheck = name.toLowerCase();
    let isExist = false;

    contactBase.map(({ name }) => {
      if (name.toLowerCase() === nameToCheck) {
        isExist = true;
        alert(`${name} is already added to your phonebook`);
      }
    });
    if (!isExist) {
      dispatch(contactOperations.addContact(name, number));
    }
  };

  const contactAdd = event => {
    event.preventDefault();
    contactCreateList();
    resetForm();
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const nameInputId = uuidv4();
  const phoneInputId = uuidv4();

  return (
    <form onSubmit={contactAdd} className="Phonebook__form">
      <div className="Phonebook-form__block-wrapper">
        <label htmlFor={nameInputId} className="Phonebook__label">
          Name
        </label>
        <div className="Phonebook-form__input-wrapper">
          <input
            className="Phonebook__input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Boris Britva"
            onChange={handleInputChange}
            value={name}
            id={nameInputId}
          />
          <FaUserEdit className="Phonebook-form__input-icon" />
        </div>
      </div>

      <div className="Phonebook-form__block-wrapper">
        <label htmlFor="phoneInputId" className="Phonebook__label">
          Number
        </label>
        <div className="Phonebook-form__input-wrapper">
          <input
            className="Phonebook__input"
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            placeholder="+380(68)-11-11-222"
            onChange={handleInputChange}
            value={number}
            id={phoneInputId}
          />
          <BiPhoneCall className="Phonebook-form__input-icon" />
        </div>
      </div>

      <button className="Phonebook__btn" type="submit">
        Add contact
      </button>
    </form>
  );
}
