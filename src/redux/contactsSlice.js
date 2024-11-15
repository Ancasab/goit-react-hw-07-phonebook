// import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './operations';

// const initialState = {
//   items: [],
//   isLoading: false,
//   error: null
// };


// const handlePending = (state) => {
//   return {
//     ...state,
//     isLoading: true,

//   }
// };
 
// const handleRejected = (state, action) => {
//   return {
//     ...state,
//     isLoading: false,
//     error: action.payload,
//   }
// };

// const handleFetchContactSuccess = (state, action) => {
//   return { ...state, isLoading: false, error: null, items: action.payload }
// };

// const handleAddContactSuccess = (state, action) => {
//   return { ...state, isLoading: false, error: null, items: [action.payload, ...state.items], }
// };

// const handleDeleteContactSuccess = (state, action) => {
//   return { ...state, isLoading: false, error: null, items: state.items.filter(item => item.id !== action.payload.id), }
// };


// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [addContact.pending]: handlePending,
//     [deleteContact.pending]: handlePending,
//     [fetchContacts.rejected]: handleRejected,
//     [addContact.rejected]: handleRejected,
//     [deleteContact.rejected]: handleRejected,
//     [fetchContacts.fulfilled]: handleFetchContactSuccess,
//     [addContact.fulfilled]: handleAddContactSuccess,
//     [deleteContact.fulfilled]: handleDeleteContactSuccess,
//   }
// })


// export const contactsReducer = contactsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [action.payload, ...state.items];
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const contactsReducer = contactsSlice.reducer;
