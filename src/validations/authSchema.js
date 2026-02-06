import * as yup from "yup";

export const registerSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Nama wajib diisi"),

  email: yup
    .string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),

  password: yup
    .string()
    .min(6, "Password minimal 6 karakter")
    .required("Password wajib diisi"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password tidak sama")
    .required("Konfirmasi password wajib diisi"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),

  password: yup
    .string()
    .required("Password wajib diisi"),
});
