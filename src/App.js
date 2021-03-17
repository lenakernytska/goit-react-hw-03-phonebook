import React, { Component } from "react";
import shortid from "shortid";
import ContactForm from "./components/ContactForm"
import ContactList from "./components/ContactList"
import Filter from "./components/Filter";


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number
    }
    const repeatedNames = this.state.contacts.find(contact => contact.name === newContact.name);
    repeatedNames
      ? alert(`${newContact.name} is already in contacts!`)
      : this.setState(prevState => ({ contacts: [newContact, ...prevState.contacts] }));
  }


  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id !== contactId),
    }))
  }

  changeFilter = (event) => {
    this.setState({filter: event.currentTarget.value})
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact=>contact.name.toLowerCase().includes(normalizedFilter))
}

  render() {
    const { filter} = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
    <div>
  <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}/>
  <h2>Contacts</h2>
        <Filter value={filter} onFilterContact={this.changeFilter }/>
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
</div>
  )
}

}

export default App;
