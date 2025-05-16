import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodoLists,
  createTodoList,
} from "../../redux/todoLists/operations";
import {
  selectTodoLists,
  selectTasksLoading,
  selectTasksError,
} from "../../redux/todoLists/selectors";
import TaskListItem from "../TaskListItem/TaskListItem";
import type { AppDispatch } from "../../redux/store";

interface Props {
  userId: string;
}

const TaskLists = ({ userId }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const todoLists = useSelector(selectTodoLists);
  const isLoading = useSelector(selectTasksLoading);
  const error = useSelector(selectTasksError);

  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    dispatch(fetchTodoLists({ userId }));
  }, [dispatch, userId]);

  const handleCreate = () => {
    if (newTitle.trim()) {
      dispatch(createTodoList({ userId, title: newTitle }));
      setNewTitle("");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">To-Do Lists</h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter list title"
          className="flex-grow border rounded px-3 py-2"
        />
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {isLoading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {todoLists.length === 0 && !isLoading ? (
        <p className="text-gray-600">No task lists found.</p>
      ) : (
        <ul className="space-y-3">
          {todoLists.map((list) => (
            <TaskListItem key={list.id} listId={list.id} title={list.title} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskLists;
