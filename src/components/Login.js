import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../slices/userSlice.js";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Jap", age: 30, email: "jap@mail.com" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
