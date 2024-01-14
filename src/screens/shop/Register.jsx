import { useState } from "react";
import CommonRegister from "../../components/Register";
import { RegisterUser } from "../../services/AdminQry";
import { ToastContainer, toast } from "react-toastify";
import { Navigate } from "react-router-dom";
const Register = () => {
  const [name, SetName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = () => toast.warning("email already exits");
  const Register = RegisterUser(notify);

  const handleLogin = (e) => {
    e.preventDefault();
    let UserData = {
      name,
      email,
      password,
    };
    Register.mutate(UserData);
  };
  return (
    <div>
      {Register.isSuccess ? (
        <Navigate to={"/login"} />
      ) : (
        <>
          <CommonRegister
            name={name}
            setName={SetName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleRegister={handleLogin}
          />
        </>
      )}
    </div>
  );
};

export default Register;
