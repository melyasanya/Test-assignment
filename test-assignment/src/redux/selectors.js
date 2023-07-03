export const getUsers = (state) => state.users;

export const getLoadingState = (state) => state.users.isLoading;

export const getFollowingIds = (state) => state.users.followingId;

export const getNeedToChange = (state) => state.users.needToChangeUser;

export const getFilterValue = (state) => state.users.filterValue;
