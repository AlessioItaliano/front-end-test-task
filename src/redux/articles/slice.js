import { createSlice } from '@reduxjs/toolkit';

import { getFirstPage, getNextPage } from './operation';

const initialState = {
  articles: [],
  isLoading: false,
  error: null,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFirstPage.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFirstPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.articles = action.payload.articles;
      })
      .addCase(getFirstPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getNextPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.articles = [...state.articles, ...action.payload.articles];
      })
      .addCase(getNextPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const articlesReducer = articlesSlice.reducer;
