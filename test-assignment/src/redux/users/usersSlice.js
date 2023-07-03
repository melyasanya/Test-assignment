import { createSlice } from "@reduxjs/toolkit";

import { changeUser, fetchUsers } from "../../services/operations";
import {
  handleChangeFulfilled,
  handleFetchFulfilled,
  handlePending,
  handleRejected,
} from "./usersHandleOperations";
import reducers from "./usersReducers";

const initialState = {
  users: [],
  followingId: [],
  isLoading: false,
  error: null,
  needToChangeUser: {},
  filterValue: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers,
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
export const { changeUserFollowers, emptyUsers, changeFilterValue } =
  usersSlice.actions;
