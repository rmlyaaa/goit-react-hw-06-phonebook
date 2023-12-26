import { GlobalStyled } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title1, Title2 } from './App.styled';

export const App = () => {
  return (
    <>
      <GlobalStyled />
      <Title1>Phonebook</Title1>
      <ContactForm />

      <Title2>Contacts</Title2>
      <Filter />
      <ContactList />
    </>
  );
};
