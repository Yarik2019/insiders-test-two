import type { RootState } from "../store";

export const selectTodoLists = (state: RootState) => state.tasks.todoLists;
export const selectTasksLoading = (state: RootState) => state.tasks.isLoading;
export const selectTasksError = (state: RootState) => state.tasks.isError;
