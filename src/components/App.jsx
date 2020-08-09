import React, { Component } from "react";
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    persistedContacts &&
      this.setState({ contacts: JSON.parse(persistedContacts) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      this.setLocalStorage();
    }
  }

  addContact = (contact) => {
    this.setState((prevState) => {
      const existedContacts = prevState.contacts.map((cont) => cont.name);
      const newName = contact.name;
      const newNumber = contact.number;
      // PREVENT SAVING SAME CONTACT
      return {
        contacts:
          existedContacts.includes(newName) ||
          newName === "" ||
          newNumber === ""
            ? prevState.contacts
            : [...prevState.contacts, contact],
      };
    });
  };

  setLocalStorage = () => {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  };

  removeContact = (e) => {
    this.setState({
      contacts: this.state.contacts.filter(
        (contact) => contact.id !== e.target.id
      ),
    });
  };

  changeFilter = (e) => {
    const { name, value } = e;
    this.setState({
      [name]: value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return (
      contacts.length > 0 &&
      contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter onChangeFilter={this.changeFilter} value={filter} />
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
