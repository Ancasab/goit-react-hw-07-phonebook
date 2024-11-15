import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://67363156aafa2ef2222fce68.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
    'contact/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contact);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);