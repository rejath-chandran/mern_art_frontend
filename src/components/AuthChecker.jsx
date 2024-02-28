import { Navigate } from "react-router-dom";
import { useLoggedInStore } from "../store.js";

function AuthChecker(props) {
  const role = useLoggedInStore((state) => state.userType);
  const IsLoggedin = useLoggedInStore((state) => state.loggedIn);
  return (
    <>
      {role === "customer" && IsLoggedin ? (
        <>{props.children}</>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
}

export default AuthChecker;
