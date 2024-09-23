import { createSlice } from '@reduxjs/toolkit';
import { LoginFormState } from '../../types/types';

const initialState: LoginFormState = {
  isVisible: true,
};

const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    showLoginForm: (state) => {
      state.isVisible = true; 
    },
    hideLoginForm: (state) => {
      state.isVisible = false;
    },
    toggleLoginForm: (state) => {
      state.isVisible = !state.isVisible; 
    },
  },
});

export const { showLoginForm, hideLoginForm, toggleLoginForm } = loginFormSlice.actions;

export default loginFormSlice.reducer;
