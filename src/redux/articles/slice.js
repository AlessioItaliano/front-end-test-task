import { createSlice } from '@reduxjs/toolkit';

import { getFirstPage } from './operation';

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
        state.articles = action.payload;
      })
      .addCase(getFirstPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });

    // .addCase(getRestOfCars.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.cars = [...state.cars, ...action.payload];
    // })
    // .addCase(getRestOfCars.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error.message;
    // });
  },
});

export const articlesReducer = articlesSlice.reducer;
