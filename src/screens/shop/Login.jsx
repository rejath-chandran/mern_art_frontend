import React from "react";
import { useLoggedInStore } from "../../store";

const Login = () => {
  const setLogin = useLoggedInStore((state) => state.login);
  const Logout = useLoggedInStore((state) => state.Logout);

  return (
    <div>
      Login normmal
      <button onClick={() => setLogin("customer")}>login</button>
      <button onClick={() => Logout()}>logout</button>
    </div>
  );
};

export default Login;
