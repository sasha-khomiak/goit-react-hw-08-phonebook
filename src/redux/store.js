// піключення бібілоеки конфігурації стора @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';

// підключення логгера (для виводу в консолі попереднього стану стора, екшена, і наступного стану стора)
// відключив, щоб в фінальному варіанті консоль не засмічувати
// import logger from 'redux-logger';

// persistStore для створення персісторного стора для апп
import { persistStore } from 'redux-persist';

// підключення persistedAuthReducer, contactsReducer, filterReducer
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
import { persistedAuthReducer } from './auth/authSlice';

//  для прибирання помилки з консолі
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// створення store.
// містить стейт-редюсер авторизації, contacts і filter
// middleware - для логгера консолі
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  // 1 додаємо logger в консоль
  // middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
  // // 2 додаємо logger в консоль + робимо error debugger
  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
  //   logger,
  // ],
  // // 3 робимо error debugger
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

// persistor для App.js
export const persistor = persistStore(store);
