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
    // [authOperations.register.pending] (state, action) {},
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    // [authOperations.register.rejected] (state, action) {},
  },
});

export const authReducer = authSlise.reducer;
