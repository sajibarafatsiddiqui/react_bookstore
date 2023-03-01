import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => { state.status = 'Under Construction'; },
  },
});

export default categoriesSlice.reducer;
export const { checkStatus } = categoriesSlice.actions;
