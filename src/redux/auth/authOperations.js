import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//Authorization заголовок
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

//registration
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

//Log-In
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

//Log-Out
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

//Fetch current User
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // console.log('thunkApi.getState()', thunkAPI.getState());
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null || persistedToken === '') {
      console.log('There is no persistedToken');
      return thunkAPI.rejectWithValue();
      // return state;
    }
    token.set(persistedToken);
    try {
      console.log('persistedToken', persistedToken);
      const { data } = await axios.get('/users/current');
      console.log('data', data);
      return data;
    } catch (error) {}
  }
);

const authOperations = { register, logIn, logOut, fetchCurrentUser };
export default authOperations;
