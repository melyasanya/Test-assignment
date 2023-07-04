import { Notify } from "notiflix/build/notiflix-notify-aio";

import { axiosLink } from "../../services/operations";

const reducers = {
  changeUserFollowers(state, action) {
    if (state.followingId.includes(action.payload)) {
      const indexToDelete = state.followingId.findIndex(
        (el) => el === action.payload
      );
      state.followingId.splice(indexToDelete, 1);
      state.users.map((user) => {
        if (user.id === action.payload) {
          user.follower -= 1;
          Notify.failure("You unfollowed this user");
        }
      });
    } else {
      state.followingId.push(action.payload);
      state.users.map((user) => {
        if (user.id === action.payload) {
          user.follower += 1;
          Notify.success("You are now following this user");
        }
      });
    }

    state.needToChangeUser = state.users.find(
      (user) => user.id === action.payload
    );
  },
  emptyUsers(state) {
    state.users = [];
    axiosLink.defaults.params.page = 1;
  },
  changeFilterValue(state, action) {
    state.filterValue = action.payload;
  },
};

export default reducers;
