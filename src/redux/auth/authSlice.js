import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
};

const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // registration
    // [authOperations.register.pending] (state, action) {},
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    // [authOperations.register.rejected] (state, action) {},

    //Log-In
    // [authOperations.logIn.pending] (state, action) {},
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    // [authOperations.logIn.rejected] (state, action) {},

    //Log-Out
  },
});

export const authReducer = authSlise.reducer;
