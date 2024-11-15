import { ContactItems, ContactData, Button, Text, Spinner } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/operations'; 
import { useEffect } from 'react';
import { selectError, selectFilteredContacts, selectIsLoading } from '../../redux/selectors';
import { GrContactInfo } from 'react-icons/gr';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    // Obține contactele la montarea componentei
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = (id) => {
    // Trimite acțiunea de ștergere a contactului
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <Spinner />}
      
      {/* "Dacă nu sunt contacte, nu este în curs de încărcare și nu a apărut nicio eroare" */}
      {!filteredContacts?.length && !error && !isLoading && (
        <Text>No contacts found.</Text>
      )}

      {/* "Dacă a apărut o eroare" */}
      {error && <Text>{error}</Text>}

      <ul>
        {filteredContacts.map(({ id, name, phone }) => (
          <ContactItems key={id}>
            <GrContactInfo size={20} />
            <ContactData>
              {name}: {phone}
            </ContactData>
            <Button
              type="button"
              onClick={() => onDeleteContact(id)} // Apel direct al funcției onDeleteContact
              aria-label={`Delete contact ${name}`}
            >
              Delete
            </Button>
          </ContactItems>
        ))}
      </ul>
    </>
  );
};

    




