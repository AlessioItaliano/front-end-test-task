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
    addUserArticle: (state, action) => {
      state.userArticles.push(action.payload);
    },

    removeUserArticle: (state, action) => {
      state.userArticles = state.userArticles.filter(
        article => article.id !== action.payload
      );
    },
  },
});

export const { addUserArticle, removeUserArticle } = userArticlesSlice.actions;

export const userArticlesReducer = persistReducer(
  persistConfig,
  userArticlesSlice.reducer
);
