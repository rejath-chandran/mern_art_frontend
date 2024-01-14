import { useState } from "react";
import CommonRegister from "../../components/Register";

const Register = () => {
  const [name, SetName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const login = useLoggedInStore((state) => state.login);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    // login("admin");
  };
  return (
    <div>
      <CommonRegister
        name={name}
        setName={SetName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleRegister={handleLogin}
      />
    </div>
  );
};

export default Register;
