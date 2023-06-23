// піключення бібілоеки конфігурації стора @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';

// підключення логгера (для виводу в консолі попереднього стану стора, екшена, і наступного стану стора)
// import logger from 'redux-logger';

import { persistStore } from 'redux-persist';

// підключення authReducer, contactsReducer, filterReducer
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
// import { authReducer } from './auth/authSlice';
import { persistedAuthReducer } from './auth/authSlice';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// створення store.
// містить стейт-редюсер contacts і filter
// middleware - для логгера консолі
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  // 1 logger
  // middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
  // // 2 logger + error debugger
  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
  //   logger,
  // ],
  // // 3 error debugger
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
