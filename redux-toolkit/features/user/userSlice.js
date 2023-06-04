const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// This thunk will generate actions types pending, fulfilled, and rejected
const fetchUsers = createAsyncThunk("user/fetchedUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = "";
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error.message;
      state.users = [];
      state.loading = false;
    });
  },
});

module.exports = userSlice.reducer;

module.exports.fetchUsers = fetchUsers;
