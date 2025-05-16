import { useEffect } from "react";
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
import { orderSchemaTodolist } from "../../utils/formValidation";
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import Loader from "../Loader/Loader";

interface Props {
  userId: string;
}

interface FormValues {
  title: string;
}

const TaskLists = ({ userId }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const todoLists = useSelector(selectTodoLists);
  const isLoading = useSelector(selectTasksLoading);
  const error = useSelector(selectTasksError);

  useEffect(() => {
    dispatch(fetchTodoLists({ userId }));
  }, [dispatch, userId]);

  const handleCreate = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    dispatch(createTodoList({ userId, title: values.title.trim() }));
    resetForm();
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">To-Do Lists</h2>

      <Formik
        initialValues={{ title: "" }}
        validationSchema={orderSchemaTodolist}
        onSubmit={handleCreate}
      >
        {({ isSubmitting }) => (
          <Form className="flex gap-2 mb-6">
            <Field
              name="title"
              type="text"
              placeholder="Enter list title"
              className="flex-grow border rounded px-3 py-2"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add
            </button>
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500 ml-2"
            />
          </Form>
        )}
      </Formik>

      {isLoading && <Loader height="23" width="20" />}
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
