import { configureStore } from '@reduxjs/toolkit';

import { persistStore } from 'redux-persist';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { articlesReducer } from './articles/slice';
import { authReducer } from './auth/slice';
import { favoriteReducer } from './favorites/slice';
import { userArticlesReducer } from './userArticles/slice';

export const store = configureStore({
  devTools: true,
  reducer: {
    auth: authReducer,
    articles: articlesReducer,
    favorite: favoriteReducer,
    userArticles: userArticlesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
