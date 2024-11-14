
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {Container, Title, Heading2 } from './App.styled';
import {ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook &#9743; </Title>
      <ContactForm/>
      <Heading2>Contacts</Heading2>
      <Filter />
      <ContactList/>
    </Container>
  );
}