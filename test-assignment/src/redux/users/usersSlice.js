import { createSlice } from "@reduxjs/toolkit";
import { changeUser, fetchUsers } from "../../services/operations";

const initialState = {
  users: [],
  followingId: [],
  isLoading: false,
  error: null,
  pageNumber: 1,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFetchFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.users = [...state.users, ...action.payload];
};

const handleChangeFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.users = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, handlePending);
    builder.addCase(fetchUsers.fulfilled, handleFetchFulfilled);
    builder.addCase(fetchUsers.rejected, handleRejected);
    builder.addCase(changeUser.pending, handlePending);
    builder.addCase(changeUser.fulfilled, handleChangeFulfilled);
    builder.addCase(changeUser.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
