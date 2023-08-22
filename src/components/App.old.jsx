// import React, { Component } from 'react';

// import { ContactForm } from './Form/Form';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { GlobalStyle } from './GlobalStyle';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

// componentDidMount() {
//   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

// addContact = newContact => {
//   const { contacts } = this.state;

//   const checkName = contacts.find(contact => newContact.name === contact.name);

//   const checkNumber = contacts.find(
//     contact => newContact.number === contact.number
//   );

//   if (checkName) {
//     return toast.error(`${newContact.name} is already in contacts.`);
//   } else if (checkNumber) {
//     return toast.error(`${newContact.number} is already in contacts.`);
//   } else {
//     this.setState(prevState => {
//       return {
//         contacts: [...prevState.contacts, newContact],
//       };
//     });
//   }
// };

// contactFilter = newContact => {
//   this.setState({
//     filter: newContact,
//   });
// };

// getVisibleContacts = () => {
//   const { contacts, filter } = this.state;
//   return (
//     contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     ) || contacts
//   );
// };

// onDelete = id => {
//   this.setState(prevState => {
//     return {
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     };
//   });
// };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <div>
//         <h2>Phonebook</h2>
//         <ContactForm onAdd={this.addContact} />
//         <h2>Contacts</h2>
//         <Filter filter={filter} onChange={this.contactFilter} />
//         <ContactList contacts={visibleContacts} onDelete={this.onDelete} />
//         <ToastContainer />
//         <GlobalStyle />
//       </div>
//     );
//   }
// }
