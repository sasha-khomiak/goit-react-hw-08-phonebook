import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import authOperations from 'redux/auth/authOperations';

import SharedLayout from './SharedLayout/SharedLayout';

import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
          <Route
            path="/register"
            element={
              <RestrictedRoute
                conponent={RegisterView}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute conponent={LoginView} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute conponent={ContactsView} redirectTo="/login" />
            }
          />

          <Route path="*" element={<HomeView />} />
        </Route>
      </Routes>
    </>
  );
}
