import { useState, useEffect } from 'react';

import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import initialContacts from './data.json';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const checkName = contacts.find(
      contact => newContact.name === contact.name
    );

    const checkNumber = contacts.find(
      contact => newContact.number === contact.number
    );

    if (checkName) {
      return toast.error(`${newContact.name} is already in contacts.`);
    } else if (checkNumber) {
      return toast.error(`${newContact.number} is already in contacts.`);
    } else {
      setContacts(prevState => {
        return [...prevState, newContact];
      });
    }
  };

  const contactFilter = newContact => {
    setFilter(newContact);
  };

  const getVisibleContacts = () => {
    const lowerCaseFilteredNameValue = filter.toLowerCase();
    const hasNameContacts = contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(lowerCaseFilteredNameValue)
    );

    if (lowerCaseFilteredNameValue && !hasNameContacts.length) {
      toast.warn(`No contacts matching your request`);
    }

    if (!hasNameContacts) {
      return contacts;
    }
    return hasNameContacts;
  };

  //=================
  // const getVisibleContacts = () => {
  //   return (
  //     contacts.filter(contact =>
  //       contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  //     ) || contacts
  //   );
  // };
  //=================

  const onDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={contactFilter} />
      <ContactList contacts={getVisibleContacts()} onDelete={onDelete} />
      <ToastContainer />
      <GlobalStyle />
    </div>
  );
}
