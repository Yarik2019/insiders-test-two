import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateTodoList,
  deleteTodoList,
} from "../../redux/todoLists/operations";
import type { AppDispatch } from "../../redux/store";

interface Props {
  listId: string;
  title: string;
}

const TaskListItem = ({ listId, title }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleUpdate = () => {
    if (newTitle.trim() && newTitle !== title) {
      dispatch(updateTodoList({ listId, newTitle }));
    }
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this list?")) {
      dispatch(deleteTodoList({ listId }));
    }
  };

  return (
    <li className="p-3 border rounded flex justify-between items-center hover:bg-gray-50">
      {isEditing ? (
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={(e) => e.key === "Enter" && handleUpdate()}
          autoFocus
          className="flex-grow border px-2 py-1 mr-4"
        />
      ) : (
        <span
          className="flex-grow cursor-pointer"
          onClick={() => setIsEditing(true)}
        >
          {title}
        </span>
      )}
      <button
        onClick={handleDelete}
        className="text-red-600 hover:text-red-800 px-2"
        title="Delete"
      >
        🗑️
      </button>
    </li>
  );
};

export default TaskListItem;
