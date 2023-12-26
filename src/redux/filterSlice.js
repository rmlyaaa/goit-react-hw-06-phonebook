import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { values: '' },
  reducers: {
    changeFilter(state, action) {
      state.values = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { changeFilter } = filterSlice.actions;
