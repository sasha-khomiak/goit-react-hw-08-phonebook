import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
};

const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // новий синтаксис через builder
      // registration
      .addCase(authOperations.register.pending, (state, action) => {})
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.register.rejected, (state, action) => {})
      //Log-In
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //Log-Out
      .addCase(authOperations.logOut.fulfilled, (state, action) => {
        state.user = { name: '', email: '' };
        state.token = '';
        state.isLoggedIn = false;
        // або
        // state = initialState;
      })
      //set Current User
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      });
  },

  // старий синтаксис
  // {
  //   // registration
  //   // [authOperations.register.pending] (state, action) {},
  //   [authOperations.register.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   // [authOperations.register.rejected] (state, action) {},

  //   //Log-In
  //   // [authOperations.logIn.pending] (state, action) {},
  //   [authOperations.logIn.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   // [authOperations.logIn.rejected] (state, action) {},

  //   //Log-Out
  //   // [authOperations.logIn.pending] (state, action) {},
  //   [authOperations.logOut.fulfilled](state, action) {
  //     state.user = { name: '', email: '' };
  //     state.token = '';
  //     state.isLoggedIn = false;
  //     // або
  //     // state = initialState;
  //   },
  //   // [authOperations.logIn.rejected] (state, action) {},

  //   //set Current User
  //   // [authOperations.logIn.pending] (state, action) {},
  //   [authOperations.fetchCurrentUser.fulfilled](state, action) {
  //     console.log('action', action);
  //     state.user = action.payload;
  //     state.isLoggedIn = true;
  //   },
  //   // [authOperations.logIn.rejected] (state, action) {},
  // },
});

export const authReducer = authSlise.reducer;

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);
