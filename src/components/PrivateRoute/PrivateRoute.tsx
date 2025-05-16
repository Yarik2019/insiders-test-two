import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";
import type { JSX } from "react";

interface Props {
  component: JSX.Element;
  redirectTo?: string;
}

const PrivateRoute = ({ component: Component, redirectTo = "/" }: Props) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) return <Loader />;

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
