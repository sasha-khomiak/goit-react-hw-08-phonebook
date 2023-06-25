// підключення бібліотеки axios
import axios from 'axios';

// підключення бібліотеки createAsyncThunk
import { createAsyncThunk } from '@reduxjs/toolkit';

// базовий урл для axios
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// 1 на  axios отримання даних
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);

// 2 на  axios додавання контакту
export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 3 на  axios видалення контакту
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
