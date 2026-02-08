import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validations/authSchema";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (!user) {
      setLoginError("Email or password not registered");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    navigate("/");
  };

  return (
    <div className="grid grid-cols-6 md:h-screen">
      {/* IMAGE */}
      <div className="hidden md:col-span-2 md:block w-full min-h-screen">
        <img
          src="/img/login.png"
          className="w-full h-full object-cover"
          alt="Login"
        />
      </div>

      {/* FORM */}
      <div className="col-span-6 w-full min-h-screen flex justify-center items-center px-10 md:col-span-4">
        <div className="w-full">
          <h1 className="text-2xl font-semibold mb-2">Login</h1>
          <p className="text-gray-500 mb-6">
            Enter your account credentials
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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

            {loginError && (
              <p className="text-red-500 text-sm">{loginError}</p>
            )}

            <Button type="submit">Login</Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <a href="/register" className="text-[#FF8906] font-medium">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
