import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const id = '6QfWUGPncjVdmCE4326p';

export const fetchAllBooks = createAsyncThunk(
  'books/fetchAllBooks',
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl + id}/books`);
      if (response.data === '') return [];
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async ({
    itemId, title, author, category,
  }, thunkAPI) => {
    try {
      await axios.post(`${baseUrl + id}/books`, {
        item_id: itemId, title, author, category,
      });
      return {
        itemId, title, author, category,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (itemId, thunkAPI) => {
    try {
      await axios.delete(`${baseUrl + id}/books/${itemId}`, { item_id: itemId });
      return itemId;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const initialState = {
  books: [],
  isLoading: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllBooks.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const arr = [];
        if (Object.keys([action.payload][0]).length > 0) {
          Object.keys([action.payload][0]).forEach(
            (book) => {
              const elt = { item_id: book, ...[action.payload][0][book][0] };
              return arr.push(elt);
            },
          );
          state.books = arr;
        } else { state.books = []; }
      })
      .addCase(fetchAllBooks.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export default booksSlice.reducer;
// export const { addBook, removeBook } = booksSlice.actions;
