import { createSlice } from "@reduxjs/toolkit";
import {
  axiosLink,
  changeUser,
  fetchUsers,
  fetchUsersToFilter,
} from "../../services/operations";

const initialState = {
  users: [],
  followingId: [],
  isLoading: false,
  error: null,
  pageNumber: 1,
  needToChangeUser: {},
  filteredUsers: [],
  filterValue: "",
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFetchFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.users = [...state.users, ...action.payload];
};

const handleChangeFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const handleFetchToFilterFulfilled = (state, action) => {
  state.filteredUsers = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    changeUserFollowers(state, action) {
      if (state.followingId.includes(action.payload)) {
        const indexToDelete = state.followingId.findIndex(
          (el) => el === action.payload
        );
        state.followingId.splice(indexToDelete, 1);
        state.users.map((user) => {
          if (user.id === action.payload) {
            user.follower -= 1;
          }
        });
      } else {
        state.followingId.push(action.payload);
        state.users.map((user) => {
          if (user.id === action.payload) {
            user.follower += 1;
          }
        });
      }

      state.needToChangeUser = state.users.find(
        (user) => user.id === action.payload
      );
    },
    emptyUsers(state) {
      state.users = [];
      state.filteredUsers = [];
      axiosLink.defaults.params.page = 1;
    },
    filterUsers(state, action) {
      state.filteredUsers = action.payload;
    },
    changeFilterValue(state, action) {
      state.filterValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, handlePending);
    builder.addCase(fetchUsers.fulfilled, handleFetchFulfilled);
    builder.addCase(fetchUsers.rejected, handleRejected);
    builder.addCase(changeUser.pending, handlePending);
    builder.addCase(changeUser.fulfilled, handleChangeFulfilled);
    builder.addCase(changeUser.rejected, handleRejected);
    builder.addCase(fetchUsersToFilter.pending, handlePending);
    builder.addCase(fetchUsersToFilter.fulfilled, handleFetchToFilterFulfilled);
    builder.addCase(fetchUsersToFilter.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
export const {
  changeUserFollowers,
  emptyUsers,
  filterUsers,
  changeFilterValue,
} = usersSlice.actions;
