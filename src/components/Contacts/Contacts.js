import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import './Contacts.scss';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
import { VscWarning } from 'react-icons/vsc';

export default function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  const fetchContacts = useCallback(
    () => dispatch(contactOperations.fetchContacts()),
    [dispatch],
  );

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

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
                  onClick={() => dispatch(contactOperations.deleteContact(id))}
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
