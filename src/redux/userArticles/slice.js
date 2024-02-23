import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'userArticles',
  storage,
};

const initialState = {
  userArticles: [],
};

export const userArticlesSlice = createSlice({
  name: 'userArticles',
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

export const { addUserArticles, removeUserArticles } =
  userArticlesSlice.actions;

export const userArticlesReducer = persistReducer(
  persistConfig,
  userArticlesSlice.reducer
);
