import React, { useState } from "react";
import { useLoggedInStore } from "../../store";
import Login from "../../components/Login";
import { LoginUser } from "../../services/AdminQry";
import { toast } from "react-toastify";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setLogin = useLoggedInStore((state) => state.login);
  const notify = () => toast.warning("Inavalid credentials");
  const login = LoginUser(setLogin, notify);

  const handleLogin = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
      type: "admin",
    };
    login.mutate(JSON.stringify(data));
  };

  return (
    <Login
      name={"Admin"}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  );
};

export default AdminLogin;
