export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleFetchFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.users = [...state.users, ...action.payload];
};

export const handleChangeFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
  state.needToChangeUser = {};
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
