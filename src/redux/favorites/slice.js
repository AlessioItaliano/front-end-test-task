import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorite',
  storage,
};

const initialState = {
  favorite: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const existing = state.favorite.findIndex(
        article => article.id === action.payload.id
      );
      if (existing === -1) {
        state.favorite.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorite = state.favorite.filter(
        article => article.id !== action.payload.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export const favoriteReducer = persistReducer(
  persistConfig,
  favoriteSlice.reducer
);
