import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../service/firebase";
import { ref, push, set, update, remove, get } from "firebase/database";

export const fetchTodoLists = createAsyncThunk(
  "tasks/fetchAll",
  async ({ userId }: { userId: string }, thunkAPI) => {
    try {
      const listsRef = ref(database, "todoLists");
      const snapshot = await get(listsRef);
      const lists = snapshot.val();

      if (!lists) return [];

      // Повертаємо лише списки, де userId є admin або viewer
      return Object.entries(lists)
        .map(([id, list]: any) => ({ id, ...list }))
        .filter((list) => list.sharedWith?.[userId]);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createTodoList = createAsyncThunk(
  "tasks/create",
  async ({ userId, title }: { userId: string; title: string }, thunkAPI) => {
    try {
      const listRef = push(ref(database, "todoLists"));
      const newList = {
        title,
        createdBy: userId,
        createdAt: Date.now(),
        sharedWith: { [userId]: "admin" },
      };
      console.log(newList);
      await set(listRef, newList);
      return { id: listRef.key, ...newList };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTodoList = createAsyncThunk(
  "tasks/update",
  async (
    { listId, newTitle }: { listId: string; newTitle: string },
    thunkAPI
  ) => {
    try {
      const listRef = ref(database, `todoLists/${listId}`);
      await update(listRef, { title: newTitle });
      return { listId, newTitle };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTodoList = createAsyncThunk(
  "tasks/delete",
  async ({ listId }: { listId: string }, thunkAPI) => {
    try {
      const listRef = ref(database, `todoLists/${listId}`);
      await remove(listRef);
      return listId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
