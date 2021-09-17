export const getUser = (state) => state.profile.user;
export const getIsAuth = (state) => state.profile.user !== null;
export const getUserName = (state) => state.profile.name;
export const getUserId = (state) => state.profile.user !== null ? state.profile.user.uid : null;