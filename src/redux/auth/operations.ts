import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AuthUser, LoginCredentials, RegisterCredentials } from "./types";
import { auth } from "../../service/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import type { User } from "firebase/auth";
const mapFirebaseUserToAuthUser = (user: User): AuthUser => ({
  uid: user.uid,
  displayName: user.displayName, // тут може бути null, якщо так тип в інтерфейсі
  email: user.email || "",
});

export const registerUser = createAsyncThunk<AuthUser, RegisterCredentials>(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      if (userData.displayName) {
        await updateProfile(userCredential.user, {
          displayName: userData.displayName,
        });
      }

      return mapFirebaseUserToAuthUser(userCredential.user);
    } catch (error: any) {
      return rejectWithValue(error?.message || "Register failed");
    }
  }
);

export const loginUser = createAsyncThunk<AuthUser, LoginCredentials>(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      return mapFirebaseUserToAuthUser(userCredential.user);
    } catch (error: any) {
      return rejectWithValue(error?.message || "Login failed");
    }
  }
);

export const logoutUser = createAsyncThunk<void>(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error: any) {
      return rejectWithValue(error?.message || "Logout failed");
    }
  }
);
