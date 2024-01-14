import React, { useState } from "react";
import { useLoggedInStore } from "../../store";
import Login from "../../components/Login";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLoggedInStore((state) => state.login);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    login("admin");
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
