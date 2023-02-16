const getFromStoreUsers = (state) => state.users;
export const getUsersData = (state) => state.users.users;
export const getUser = (state) => state.users.user;
export const getLoading = (state) => getFromStoreUsers(state).isLoading;
export const getError = (state) => getFromStoreUsers(state).isError;
export const getIsAuth = (state) => getFromStoreUsers(state).isAuth;