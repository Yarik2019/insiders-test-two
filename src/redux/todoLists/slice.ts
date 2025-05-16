import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchTodoLists,
  createTodoList,
  updateTodoList,
  deleteTodoList,
} from "./operations";

interface TodoList {
  id: string;
  title: string;
  createdBy: string;
  createdAt: number;
  sharedWith: Record<string, "admin" | "viewer">;
}

interface TasksState {
  todoLists: TodoList[];
  isLoading: boolean;
  isError: string | null;
}

const initialState: TasksState = {
  todoLists: [],
  isLoading: false,
  isError: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoLists.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.todoLists = action.payload;
      })
      .addCase(createTodoList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.todoLists.push(action.payload);
      })
      .addCase(updateTodoList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        const { listId, newTitle } = action.payload;
        const list = state.todoLists.find((l) => l.id === listId);
        if (list) list.title = newTitle;
      })
      .addCase(deleteTodoList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.todoLists = state.todoLists.filter(
          (l) => l.id !== action.payload
        );
      })
      .addMatcher(
        isAnyOf(
          fetchTodoLists.pending,
          createTodoList.pending,
          updateTodoList.pending,
          deleteTodoList.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTodoLists.rejected,
          createTodoList.rejected,
          updateTodoList.rejected,
          deleteTodoList.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload as string;
        }
      );
  },
});

export const tasksReducer = tasksSlice.reducer;
