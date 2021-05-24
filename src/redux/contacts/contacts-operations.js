import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import notifications from '../../components/Notification';
import actions from './contacts-actions';

/* axios.defaults.baseURL = 'http://localhost:4040'; */

const addContact = (name, number) => dispatch => {
  const contact = {
    id: uuidv4(),
    name,
    number,
  };

  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .then(notifications.contactAddedSuccessNotify())
    .catch(error => dispatch(actions.addContactError(error)));
};

const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());
  try {
    await axios
      .delete(`contacts/${id}`)
      .then(() => dispatch(actions.deleteContactSuccess(id)))
      .then(notifications.contactDeletedSuccessNotify());
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    await axios
      .get('/contacts')
      .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

export default { addContact, deleteContact, fetchContacts };
