import { Route, Routes } from 'react-router-dom';
import HomeView from 'pages/HomeView';
import RegisterView from 'pages/RegisterView';
import LoginView from 'pages/LoginView';
import ContactsView from 'pages/ContactsView';
import SharedLayout from './SharedLayout/SharedLayout';

// функціональний компонент. головний додаток, маршрутизація
export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="contacts" element={<ContactsView />} />
          <Route path="*" element={<HomeView />} />
        </Route>
      </Routes>
    </>
  );
}
