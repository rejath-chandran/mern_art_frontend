import React, { useState } from "react";
import { useLoggedInStore } from "../../store";
import CommonLogin from "../../components/Login";
import { LoginUser } from "../../services/AdminQry";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setLogin = useLoggedInStore((state) => state.login);
  // const Logout = useLoggedInStore((state) => state.logout);
  const notify = () => toast.warning("Inavalid credentials");
  const login = LoginUser(setLogin, notify);

  const handleLogin = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    login.mutate(data);
  };
  return (
    <div>
      {login.isSuccess ? (
        <Navigate to={"/"} />
      ) : (
        <CommonLogin
          name={""}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      )}
    </div>
  );
};

export default Login;
