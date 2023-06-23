import React from 'react';

// імпорт стилізованих компонентів для App (тільки контейнер)
import { Container } from 'components/App.styled';

// імпорт компонентів
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

const ContactsView = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default ContactsView;
