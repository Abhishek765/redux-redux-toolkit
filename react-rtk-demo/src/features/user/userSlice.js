import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  users: [],
  error: ''
};

// This thunk will generate actions types pending, fulfilled, and rejected
export const fetchUsers = createAsyncThunk('user/fetchedUsers', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = '';
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error.message;
      state.users = [];
      state.loading = false;
    });
  }
});

export default userSlice.reducer;
