import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProcessState, IRouteData } from '../../types/types';

const initialState: ProcessState = {
  data: []
};

const processSlice = createSlice({
  name: 'process',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<IRouteData>) => {
      state.data.unshift(action.payload);
    },
    removeData: (state, action: PayloadAction<number>) => {
      state.data.splice(action.payload, 1);
    },
    updateData: (state, action: PayloadAction<{ index: number; newData: IRouteData }>) => {
      state.data[action.payload.index] = action.payload.newData;
    },
    clearData: (state) => { // Corrigido aqui
      state.data = [];
    },
    setProcessData: (state, action: PayloadAction<IRouteData[]>) => { // Nova ação
      state.data = action.payload; // Atualiza o estado com os dados da API
    }
  },
});

export const { addData, removeData, updateData, clearData, setProcessData } = processSlice.actions; // Adicione clearData aqui

export default processSlice.reducer;
