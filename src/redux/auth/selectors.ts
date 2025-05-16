import type { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsError = (state: RootState) => state.auth.error;
export const selectUser = (state: RootState) => state.auth.user;

export const selectUserId = (state: RootState): string | undefined => {
  return state.auth.user?.uid; // або .id, якщо у тебе так
};
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
