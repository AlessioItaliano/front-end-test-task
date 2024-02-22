import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = '51944f67e49a4163907ba6a3561ac811';

axios.defaults.baseURL = 'https://newsapi.org/v2/everything?q=keyword&';
axios.defaults.headers.common['Authorization'] = API_KEY;

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
      const response = await axios.get('/', {
        params: {
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
