import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../service/firebase"; // Firestore інстанс
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Отримати всі списки, де користувач має доступ (admin або viewer)
export const fetchTodoLists = createAsyncThunk(
  "tasks/fetchAll",
  async ({ userId }: { userId: string }, thunkAPI) => {
    try {
      const todoListsCol = collection(database, "todoLists"); // тут database — Firestore
      const snapshot = await getDocs(todoListsCol);

      // Отримуємо масив списків, фільтруємо по доступу користувача
      const lists = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((list) => list.sharedWith?.[userId]);

      return lists;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Створити новий список задач
export const createTodoList = createAsyncThunk(
  "tasks/create",
  async ({ userId, title }: { userId: string; title: string }, thunkAPI) => {
    try {
      const todoListsCol = collection(database, "todoLists"); // Firestore collection
      const newList = {
        title,
        createdBy: userId,
        createdAt: Date.now(),
        sharedWith: { [userId]: "admin" },
      };

      // Автоматично генеруємо новий документ із ID
      const newDocRef = doc(todoListsCol);
      await setDoc(newDocRef, newList);

      return { id: newDocRef.id, ...newList };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Оновити назву списку задач
export const updateTodoList = createAsyncThunk(
  "tasks/update",
  async (
    { listId, newTitle }: { listId: string; newTitle: string },
    thunkAPI
  ) => {
    try {
      const listDoc = doc(database, "todoLists", listId);
      await updateDoc(listDoc, { title: newTitle });
      return { listId, newTitle };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Видалити список задач
export const deleteTodoList = createAsyncThunk(
  "tasks/delete",
  async ({ listId }: { listId: string }, thunkAPI) => {
    try {
      const listDoc = doc(database, "todoLists", listId);
      await deleteDoc(listDoc);
      return listId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
