import PropTypes from 'prop-types';
import {  ContactItems, ContactData,  Button } from './ContactList.styled'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';


export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
);


    return (
      <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItems key={id}>
          <ContactData>
            {name}: {number}
          </ContactData>
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </ContactItems>
      ))}
    </ul>
  );
};
    

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string),
  deleteContact: PropTypes.func,
};


