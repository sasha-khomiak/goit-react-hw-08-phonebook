// імпортуємо бібліотеку createSlice
import { createSlice } from '@reduxjs/toolkit';

// імпортуємо операції роботи з сервером
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

// винесені функції повторюваного коду
//  пендінг
const handlePending = state => {
  state.isLoading = true;
};
// помилка
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

// початковий стан стейту
const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

// створюємо Slice для 'contacts'
// ред'юсери у форматі extraReducers з трьома станами запиту на кожну операцію (pending,fulfilled,rejected)
// новий синтаксис builder і старий синтаксис (закоментований)
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      // новий синтаксис через builder
      // читання контактів
      .addCase(fetchContacts.pending, (state, action) => handlePending(state))
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) =>
        handleRejected(state, action)
      )
      // додавання контакту
      .addCase(addContact.pending, (state, action) => handlePending(state))
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) =>
        handleRejected(state, action)
      )
      // видалення контакту
      .addCase(deleteContact.pending, (state, action) => handlePending(state))
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) =>
        handleRejected(state, action)
      );
  },

  // старий синтаксис
  // {
  //   // читання контактів
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.contacts = action.payload;
  //     state.isLoading = false;
  //     state.error = null;
  //   },
  //   [fetchContacts.rejected]: handleRejected,

  //   // додавання контакту
  //   [addContact.pending]: handlePending,
  //   [addContact.fulfilled](state, action) {
  //     state.contacts.push(action.payload);
  //     state.isLoading = false;
  //     state.error = null;
  //   },
  //   [addContact.rejected]: handleRejected,

  //   // видалення контакту
  //   [deleteContact.pending]: handlePending,
  //   [deleteContact.fulfilled](state, action) {
  //     const index = state.contacts.findIndex(
  //       contact => contact.id === action.payload.id
  //     );
  //     state.contacts.splice(index, 1);
  //     state.isLoading = false;
  //     state.error = null;
  //   },
  //   [deleteContact.rejected]: handleRejected,
  // },
});

// експорт редʼюсера для стор
export const contactsReducer = contactsSlice.reducer;
