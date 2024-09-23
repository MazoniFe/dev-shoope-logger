import { createSlice } from '@reduxjs/toolkit';
import { LoginFormState } from '../../types/types';

const initialState: LoginFormState = {
  isVisible: false,
  user : null
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
    login: (state, action) => {
      state.user = action.payload; 
    },
    logout: (state) => {
      state.user = null; 
    },
  },
});

export const { showLoginForm, hideLoginForm, toggleLoginForm, login, logout } = loginFormSlice.actions;

export default loginFormSlice.reducer;
