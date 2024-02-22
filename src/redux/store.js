import { configureStore } from '@reduxjs/toolkit';

// import { persistStore } from 'redux-persist';

// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

import { articlesReducer } from './articles/slice';
// import { favoritesReducer } from './favorites/favoritesSlice';
// import { filteredCarsReducer } from './filter/filterSlice';

export const store = configureStore({
  devTools: true,
  reducer: {
    articles: articlesReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);
