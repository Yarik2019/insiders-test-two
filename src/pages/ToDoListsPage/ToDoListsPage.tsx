import { useSelector } from "react-redux";
import TaskLists from "../../components/TaskLists/TaskLists";
import { selectUser } from "../../redux/auth/selectors";

const ToDoListsPage = () => {
  const userId = useSelector(selectUser); // тут має бути selectUserId

  return (
    <div>
      <TaskLists userId={userId?.uid ?? "123"} />
    </div>
  );
};

export default ToDoListsPage;
