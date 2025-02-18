import { RootState } from "./store"; // Import RootState từ store

export const selectUserInfo = (state: RootState) => {
  return state.user.userInfo;
};
export const selectUserLoading = (state: RootState) => state.user.loading;
