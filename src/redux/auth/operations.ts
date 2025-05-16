import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AuthUser, LoginCredentials, RegisterCredentials } from "./types";

const fakeRegisterAPI = async (
  data: RegisterCredentials
): Promise<AuthUser> => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          uid: "123",
          displayName: data.displayName || "User",
          email: data.email,
        }),
      1000
    )
  );
};

const fakeLoginAPI = async (data: LoginCredentials): Promise<AuthUser> => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          uid: "123",
          displayName: "User",
          email: data.email,
        }),
      1000
    )
  );
};

const fakeLogoutAPI = async (): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, 500));
};

// Реєстрація
export const registerUser = createAsyncThunk<AuthUser, RegisterCredentials>(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fakeRegisterAPI(userData);
      return response;
    } catch {
      return rejectWithValue("Register failed");
    }
  }
);

// Логін
export const loginUser = createAsyncThunk<AuthUser, LoginCredentials>(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fakeLoginAPI(credentials);
      return response;
    } catch {
      return rejectWithValue("Login failed");
    }
  }
);

// Вихід
export const logoutUser = createAsyncThunk<void>(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await fakeLogoutAPI();
    } catch {
      return rejectWithValue("Logout failed");
    }
  }
);
