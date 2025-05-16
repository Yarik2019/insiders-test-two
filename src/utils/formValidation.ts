import * as Yup from "yup";

// Визначаємо валідатор для email
const emailValid = Yup.string()
  .email("Invalid email format")
  .min(3, "Minimum 3 characters")
  .max(50, "Maximum 50 characters")
  .required("Email is required");

// Валідатор для пароля
const passwordValid = Yup.string()
  .min(3, "Minimum 3 characters")
  .max(50, "Maximum 50 characters")
  .matches(/[a-zA-Z]/, "Must contain a letter")
  .matches(/[0-9]/, "Must contain numbers")
  .required("Password is required");

// Валідатор для підтвердження пароля - посилається на password
const confirmPasswordValid = Yup.string()
  .oneOf([Yup.ref("password"), null], "Passwords must match")
  .required("Confirm password is required");

const validationSchematitle = Yup.string()
  .trim()
  .min(1, "Title is required")
  .max(50, "Title too long")
  .required("Title is required");

// Схема для реєстрації
export const orderSchemaReg = Yup.object({
  email: emailValid,
  password: passwordValid,
  confirmPassword: confirmPasswordValid,
});

// Схема для логіну
export const orderSchemaLogin = Yup.object({
  email: emailValid,
  password: passwordValid,
});

export const orderSchemaTodolist = Yup.object({
  title: validationSchematitle,
});

// --- Типи для форм (опціонально, якщо хочеш типізувати дані) ---

export type RegistrationFormValues = Yup.InferType<typeof orderSchemaReg>;
export type LoginFormValues = Yup.InferType<typeof orderSchemaLogin>;
