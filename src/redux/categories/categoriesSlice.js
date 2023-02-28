import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => state.status,
  },
});
// console.log(booksSlice);
export default categoriesSlice.reducer;
