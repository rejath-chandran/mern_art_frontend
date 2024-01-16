import React, { useState } from "react";
import { useLoggedInStore } from "../../store";
import Login from "../../components/Login";
import { LoginUser } from "../../services/AdminQry";
import { ToastContainer, toast } from "react-toastify";

const SellerLogin = () => {
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
      type: "seller",
    };
    login.mutate(JSON.stringify(data));
  };

  return (
    <>
      <Login
        name={"Artist"}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </>
  );
};

export default SellerLogin;
