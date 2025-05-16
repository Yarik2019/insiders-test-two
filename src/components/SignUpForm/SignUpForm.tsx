import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import type { FormikHelpers } from "formik";
import { registerUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { orderSchemaReg } from "../../utils/formValidation.ts";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import type { AppDispatch } from "../../redux/store";
import EyeClosedIcon from "../Icons/EyeClosedIcon/EyeClosedIcon.tsx";
import EyeOpenIcon from "../Icons/EyeOpenIcon/EyeOpenIcon.tsx";

interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: SignUpFormValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsRefreshing);

  const togglePasswordVisibility = () => setPasswordVisible((prev) => !prev);
  const toggleRepeatPasswordVisibility = () =>
    setRepeatPasswordVisible((prev) => !prev);

  const handleSubmit = async (
    values: SignUpFormValues,
    { setSubmitting }: FormikHelpers<SignUpFormValues>
  ) => {
    // Диспатч екшена реєстрації користувача
    const resultAction = await dispatch(registerUser(values));
    if (registerUser.fulfilled.match(resultAction)) {
      toast.success("Successfully registered!");
      navigate("/"); // Переадресація після успішної реєстрації
    } else {
      toast.error("Registration failed. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">AQUATRACK</h1>

      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={orderSchemaReg}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    touched.email
                      ? errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-green-500 focus:ring-green-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password */}
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
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      touched.password
                        ? errors.password
                          ? "border-red-500 focus:ring-red-500"
                          : "border-green-500 focus:ring-green-500"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-2/4 -translate-y-2/4 text-gray-600 hover:text-gray-900 focus:outline-none"
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
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-1 font-medium"
                >
                  Repeat Password
                </label>
                <div className="relative">
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type={repeatPasswordVisible ? "text" : "password"}
                    placeholder="Repeat your password"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      touched.confirmPassword
                        ? errors.confirmPassword
                          ? "border-red-500 focus:ring-red-500"
                          : "border-green-500 focus:ring-green-500"
                        : "border-gray-300"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={toggleRepeatPasswordVisibility}
                    className="absolute right-3 top-2/4 -translate-y-2/4 text-gray-600 hover:text-gray-900 focus:outline-none"
                    aria-label={
                      repeatPasswordVisible ? "Hide password" : "Show password"
                    }
                  >
                    {repeatPasswordVisible ? (
                      <EyeOpenIcon />
                    ) : (
                      <EyeClosedIcon />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2 rounded-md flex justify-center items-center gap-2"
              >
                {isLoading || isSubmitting ? <Loader /> : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>

        {/* Login Link */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <NavLink to="/signIn" className="text-blue-600 hover:underline">
            Log in
          </NavLink>
        </p>
      </div>
    </div>
  );
}
