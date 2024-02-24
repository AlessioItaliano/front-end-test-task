import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = '23b08454d14342cf869e3093546c5419';

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
  async ({ page, q = 'keyword' }, thunkAPI) => {
    try {
      const response = await API.get('/everything', {
        params: {
          q,
          apiKey: API_KEY,
          page,
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

export const getRequest = createAsyncThunk(
  'articles/getRequest',
  async (q, thunkAPI) => {
    try {
      const response = await API.get('/everything', {
        params: {
          q,
          apiKey: API_KEY,
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
