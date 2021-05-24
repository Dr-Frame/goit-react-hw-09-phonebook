import React from 'react';
import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import './Filter.scss';
import { RiFilter2Fill } from 'react-icons/ri';
/* 
import styles from './Filter.module.css'; */

const Filter = ({ filter, changeFilter }) => {
  return (
    <div className="Contacts__block-wrapper">
      <label htmlFor="filter" className="Contacts__label">
        Find contacts by name
      </label>
      <div className="Contacts__input-wrapper">
        <input
          id="filter"
          className="Contacts__input"
          type="text"
          name="filter"
          value={filter}
          onChange={changeFilter}
        />
        <RiFilter2Fill className="Contacts__input-icon" />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilterValue(state),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: e =>
    dispatch(contactActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
