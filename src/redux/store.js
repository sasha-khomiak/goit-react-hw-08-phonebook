// піключення бібілоеки конфігурації стора @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';

// підключення логгера (для виводу в консолі попереднього стану стора, екшена, і наступного стану стора)
import logger from 'redux-logger';

// підключення authReducer, contactsReducer, filterReducer
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

// створення store.
// містить стейт-редюсер contacts і filter
// middleware - для логгера консолі
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
  //  logger
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});
