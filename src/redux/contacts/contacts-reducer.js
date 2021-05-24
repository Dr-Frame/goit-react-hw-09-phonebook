import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './contacts-actions';

const contacts = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteContactSuccess]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsError]: () => false,
  [actions.fetchContactsSuccess]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactError]: () => false,
  [actions.addContactSuccess]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactError]: () => false,
  [actions.deleteContactSuccess]: () => false,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
