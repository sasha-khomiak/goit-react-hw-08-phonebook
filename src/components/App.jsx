// імпорт стилізованих компонентів для App (тільки контейнер)
// import { Container } from './App.styled';

// імпорт компонентів
// import ContactList from './ContactList';
// import Filter from './Filter';
// import ContactForm from './ContactForm';
import { Route, Routes } from 'react-router-dom';
import HomeView from 'pages/HomeView';
import RegisterView from 'pages/RegisterView';
import LoginView from 'pages/LoginView';
import ContactsView from 'pages/ContactsView';

// функціональний компонент. головний додаток
export function App() {
  // розмітка
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes>
    </>
    // <Container>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    // </Container>
  );
}
