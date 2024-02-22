import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = '897efb036a4845799ba2f2dcd2dedef0';

// axios.defaults.baseURL = 'https://newsapi.org/v2/everything?q=keyword&apiKey=897efb036a4845799ba2f2dcd2dedef0';
axios.defaults.baseURL = 'https://newsapi.org/v2/everything?q=keyword&';
axios.defaults.headers.common['Authorization'] = API_KEY;

// axios.defaults.baseURL = `https://newsapi.org/v2/everything?q=Apple&from=2024-02-21&sortBy=popularity&apiKey=API_KEY`;

export const getFirstPage = createAsyncThunk(
  'articles/getFirstPage',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/', {
        params: {
          page: 1,
          pageSize: 10,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getNextPage = createAsyncThunk(
  'newsList/getFirstPage',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get('/news', {
        params: {
          page,
          limit: 10,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
