import React, { Component } from 'react';
/* import styles from './Contacts.css'; */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import './Contacts.scss';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
import { VscWarning } from 'react-icons/vsc';

class Contacts extends Component {
  state = {};

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { contacts, deleteContact, isLoadingContacts } = this.props;
    return (
      <div className="Contacts-wrapper">
        {isLoadingContacts && <h2>...loading</h2>}
        {contacts.length === 0 && (
          <div className="Contacts__empty">
            <VscWarning className="Contacts__empty__warning-icon" />
            <p className="Contacts__empty__text">No contacts added</p>
          </div>
        )}
        {!isLoadingContacts && (
          <ul className="Contacts__list">
            {contacts.map(({ id, name, number }) => {
              return (
                <li key={id} className="Contacts__item">
                  <div className="Contacts__item-wrapper">
                    <p className="Contacts__item__name">
                      <FaUser className="Contacts__item__icon" />
                      {name}
                    </p>
                    <p className="Contacts__item__number">
                      <ImPhone className="Contacts__item__icon" />
                      {number}
                    </p>
                  </div>

                  <button
                    className="Contacts__btn"
                    type="button"
                    onClick={() => deleteContact(id)}
                  >
                    <RiDeleteBin2Fill className="Contacts__btn-icon" />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
