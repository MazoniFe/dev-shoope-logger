import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProcessState, RouteData } from '../../types/types';

const initialState: ProcessState = {
  data: []
};

const processSlice = createSlice({
  name: 'process',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<RouteData>) => {
      state.data.unshift(action.payload);
    },
    removeData: (state, action: PayloadAction<number>) => {
      state.data.splice(action.payload, 1);
    },
    updateData: (state, action: PayloadAction<{ index: number; newData: RouteData }>) => {
      state.data[action.payload.index] = action.payload.newData;
    },
    clearData: (state) => { // Corrigido aqui
      state.data = [];
    }
  },
});

export const { addData, removeData, updateData, clearData } = processSlice.actions; // Adicione clearData aqui

export default processSlice.reducer;