import {ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {Container, Title, Heading2 } from './App.styled';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook &#9743; </Title>
      <ContactForm/>
      <Heading2>Contacts</Heading2>
      <Filter />
      <ContactList />
      <ToastContainer position="top-center" />
    </Container>
  );
}

// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { Container, Title, Heading2 } from './App.styled';
// import { ToastContainer } from 'react-toastify'; 
// import 'react-toastify/dist/ReactToastify.css';

// export const App = () => {
//   return (
//     <Container>
//       {/* Title section with phonebook emoji */}
//       <Title>
//         Phonebook <span role="img" aria-label="phone">📞</span>
//       </Title>
      
//       {/* Contact form for adding new contacts */}
//       <ContactForm />
      
//       {/* Contacts header */}
//       <Heading2>Contacts</Heading2>
      
//       {/* Filter for searching contacts */}
//       <Filter />
      
//       {/* List of contacts */}
//       <ContactList />
      
//       {/* Toast container for showing notifications */}
//       <ToastContainer position="top-center" />
//     </Container>
//   );
// };
