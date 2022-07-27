import { configureStore } from '@reduxjs/toolkit';
import { contactsAPI } from 'services/contactsApi';
import { filterSlice } from './slice';

export const store = configureStore({
  reducer: {
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsAPI.middleware,
  ],
});
