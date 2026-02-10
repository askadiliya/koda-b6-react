import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validations/authSchema";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const isEmailExist = users.some((u) => u.email === data.email);
    if (isEmailExist) {
      alert("Email already registered");
      return;
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <div className="grid grid-cols-6 md:h-screen">
      {/* LEFT IMAGE */}
      <div className="hidden md:col-span-2 md:block w-full min-h-screen">
        <img
          src="/img/Register.png"
          alt="Register"
          className="w-full h-full object-cover"
        />
      </div>

      {/* FORM */}
      <div className="col-span-6 w-full min-h-screen flex justify-center items-center px-10 md:col-span-4">
        <div className="w-full">
          <h1 className="text-2xl font-semibold mb-2">Register</h1>
          <p className="text-gray-500 mb-6">
            Fill out the form correctly
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                placeholder="Full Name"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <Input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button type="submit">
              Register
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Have an account?{" "}
            <a
              href="/login"
              className="text-[#FF8906] font-medium"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
