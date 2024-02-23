import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'b1969fcdd10b43f79421471d42c2f6ec';

const API = axios.create({
  baseURL: 'https://newsapi.org/v2',
});

export const getFirstPage = createAsyncThunk(
  'articles/getFirstPage',
  async (_, thunkAPI) => {
    try {
      const response = await API.get('/everything', {
        params: {
          q: 'keyword',
          apiKey: API_KEY,
          page: 1,
          pageSize: 10,
        },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getNextPage = createAsyncThunk(
  'articles/getNextPage',
  async (page, thunkAPI) => {
    try {
      const response = await API.get('/everything', {
        params: {
          q: 'keyword',
          apiKey: API_KEY,
          page,
          pageSize: 10,
        },
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
