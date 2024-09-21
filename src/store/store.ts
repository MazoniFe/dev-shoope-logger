import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import processReducer from '../features/process/processSlice';

// Aqui você vai adicionar os reducers
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    process: processReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
