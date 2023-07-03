export const getUsers = (state) => state.users;

export const getPage = (state) => state.pageNumber;

export const getFollowingIds = (state) => state.users.followingId;

export const getNeedToChange = (state) => state.users.needToChangeUser;

export const getFilteredUsers = (state) => state.users.filteredUsers;

export const getFilterValue = (state) => state.users.filterValue;
