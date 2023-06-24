import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import authOperations from 'redux/auth/authOperations';

import SharedLayout from './SharedLayout/SharedLayout';

import PrivateRoute from './PrivateRoute';

import { lazy } from 'react';

const HomeView = lazy(() => import('../pages/HomeView'));
const RegisterView = lazy(() => import('../pages/RegisterView'));
const LoginView = lazy(() => import('../pages/LoginView'));
const ContactsView = lazy(() => import('../pages/ContactsView'));

// // компоненти не через лейзі
// import HomeView from 'pages/HomeView';
// import RegisterView from 'pages/RegisterView';
// import LoginView from 'pages/LoginView';
// import ContactsView from 'pages/ContactsView';
//

// функціональний компонент. головний додаток, маршрутизація
export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="contacts" element={<ContactsView />} />

          {/* <PrivateRoute path="contacts">
            <ContactsView />
          </PrivateRoute> */}

          {/* <Route
            path="contact"
            element={<PrivateRoute el={<ContactsView />} />}
          /> */}

          <Route path="*" element={<HomeView />} />
        </Route>
      </Routes>
    </>
  );
}
