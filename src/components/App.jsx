// маршрутизація
import { Route, Routes } from 'react-router-dom';

// диспатч для перезапису стейту
import { useDispatch } from 'react-redux';

// хук useEffect
import { useEffect } from 'react';

// операції авторизації (при завантажені компонента будемо фетчати юзера, якщо токен є в локадсторедж)
import authOperations from 'redux/auth/authOperations';

// щаред лейаут для спільної шапки на всіх вклалених роутах
import SharedLayout from './SharedLayout/SharedLayout';

//  приватні і рестріктед роуд
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

// лейзі і прогонка компонентів через завантаження лейзі
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

  //витягаємо токен з локадсторедж і "логінимо" юзера
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
