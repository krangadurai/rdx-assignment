import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ''
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setValue } = appSlice.actions;
export default appSlice.reducer;
