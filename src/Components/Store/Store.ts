import { configureStore } from '@reduxjs/toolkit';
import buttonSlice from './Slice';

export const mainStore = configureStore({
  reducer: {
    buttonSlice,
  },
});

export type RootState = ReturnType<typeof mainStore.getState>;
export type AppDispatch = typeof mainStore.dispatch;
