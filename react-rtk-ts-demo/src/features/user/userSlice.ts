import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type UserType = {
  id: number;
  name: string;
};

type InitialStateType = {
  loading: boolean;
  users: UserType[];
  error: string;
};

const initialState: InitialStateType = {
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<UserType[]>) => {
        state.users = action.payload;
        state.loading = false;
        state.error = '';
      }
    );

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error.message || 'Something went wrong';
      state.users = [];
      state.loading = false;
    });
  }
});

export default userSlice.reducer;
