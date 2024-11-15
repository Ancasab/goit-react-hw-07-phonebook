import { nanoid } from 'nanoid';
import { Form, Input, Button, Text } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts, selectIsLoading } from '../../redux/selectors';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (event) => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };

    // Check if both fields are filled
    if (!contact.name || !contact.number) {
      return toast.error('Please fill in both name and number');
    }

    // Check for existing contact
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExist) {
      return toast.warn(`${contact.name} is already in the Phonebook`);
    }

    // Dispatch addContact action
    dispatch(addContact(contact));
    event.currentTarget.reset(); // Reset the form after submission
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Text htmlFor="name-input">Name</Text>
      <Input
        type="text"
        name="name"
        id="name-input"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      
      <Text htmlFor="number-input">Number</Text>
      <Input
        type="tel"
        name="number"
        id="number-input"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Contact'}
      </Button>
    </Form>
  );
};





