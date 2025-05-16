import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import type { FormikHelpers } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { orderSchemaLogin } from "../../utils/formValidation";
import Loader from "../Loader/Loader";
import type { AppDispatch } from "../../redux/store";
import { loginUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import toast from "react-hot-toast";
import EyeOpenIcon from "../Icons/EyeOpenIcon/EyeOpenIcon";
import EyeClosedIcon from "../Icons/EyeClosedIcon/EyeClosedIcon";

interface SignInFormValues {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsRefreshing);
  console.log(isLoading);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const initialValues: SignInFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: SignInFormValues,
    { setSubmitting }: FormikHelpers<SignInFormValues>
  ) => {
    try {
      await dispatch(loginUser(values)).unwrap();
      toast.success("Successfully logged in!");
      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-8">AQUATRACK</h1>
      <div className="w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6">Sign In</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={orderSchemaLogin}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    touched.email
                      ? errors.email
                        ? "border-red-500"
                        : "border-green-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-1 font-medium">
                  Password
                </label>
                <div className="relative">
                  <Field
                    id="password"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    className={`w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      touched.password
                        ? errors.password
                          ? "border-red-500"
                          : "border-green-500"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 top-2.5 text-gray-500 hover:text-gray-700 focus:outline-none"
                    aria-label={
                      passwordVisible ? "Hide password" : "Show password"
                    }
                  >
                    {passwordVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2 rounded transition-colors"
              >
                {isSubmitting ? (
                  <div className="flex justify-center">
                    <Loader />
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>
            </Form>
          )}
        </Formik>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
