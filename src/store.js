import { create } from "zustand";

const $LOCAL_LOGGEDIN_KEY = "my_app_logged_in";

const $LOCAL_USER_TYPE = "logged_user_type";

const getInitialLoggedIn = () => {
  const loggedIn = localStorage.getItem($LOCAL_LOGGEDIN_KEY) || false;
  return loggedIn;
};

const geIntialUserType = () => {
  const userType = localStorage.getItem($LOCAL_USER_TYPE) || "customer";
  return userType;
};
export const useLoggedInStore = create((set) => ({
  loggedIn: getInitialLoggedIn(),
  userType: geIntialUserType(),

  login: (usertype) =>
    set(() => {
      localStorage.setItem($LOCAL_LOGGEDIN_KEY, true);
      localStorage.setItem($LOCAL_USER_TYPE, usertype);

      return {
        loggedIn: true,
        userType: usertype,
      };
    }),

  logout: () =>
    set(() => {
      localStorage.removeItem($LOCAL_LOGGEDIN_KEY);
      localStorage.removeItem($LOCAL_USER_TYPE);
      return {
        loggedIn: false,
        userType: "customer",
      };
    }),
}));
