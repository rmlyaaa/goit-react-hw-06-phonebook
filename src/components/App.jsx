import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { useState, useEffect } from 'react';
import { GlobalStyled } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title1, Title2 } from './App.styled';

const storageKey = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const savedContacts = window.localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  const onInput = evt => {
    setFilter(evt.value);
  };

  const onAdd = values => {
    const { name, number } = values;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notify.failure(`${name} is already in conracts`);
    }
    const contact = [...contacts, { id: nanoid(), name: name, number: number }];

    setContacts(contact);
  };

  const onDelete = id => {
    setContacts(prevContact =>
      prevContact.filter(contact => contact.id !== id)
    );
  };

  const visibleContacts = contacts.filter(contact => {
    const hasContact = contact.name
      .toLowerCase()
      .includes(filter.toLowerCase());
    return hasContact;
  });

  return (
    <>
      <GlobalStyled />
      <Title1>Phonebook</Title1>
      <ContactForm onAdd={onAdd} />

      <Title2>Contacts</Title2>
      <Filter filter={filter} onInput={onInput} />
      <ContactList visibleContacts={visibleContacts} onDelete={onDelete} />
    </>
  );
};
