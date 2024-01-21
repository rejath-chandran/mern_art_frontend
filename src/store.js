import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const $LOCAL_LOGGEDIN_KEY = "my_app_logged_in";

const $LOCAL_USER_TYPE = "logged_user_type";

const $LOCAL_USER_TOKEN = "user_token";

const getInitialLoggedIn = () => {
  const loggedIn = localStorage.getItem($LOCAL_LOGGEDIN_KEY) || false;
  return loggedIn;
};

const geIntialUserType = () => {
  const userType = localStorage.getItem($LOCAL_USER_TYPE) || "customer";
  return userType;
};


// export const useLoggedInStore = create( persist((set,get)=>({
//   loggedIn:false,
//   userType:"customer",
//   user_token:"",
//   login: (usertype, token = null) =>set(()=>({
//    loggedIn: true,
//    userType: usertype,
//    user_token:token
//   })),
//   logout: () =>set(() => ({
//     loggedIn: false,
//     userType: "customer",
//     user_token:''
//   }))

// }),{name:"AuthStore"})) 


export const useLoggedInStore = create((set) => ({
  loggedIn: getInitialLoggedIn(),
  userType: geIntialUserType(),

  login: (usertype, token = null) =>
    set(() => {
      localStorage.setItem($LOCAL_LOGGEDIN_KEY, true);
      localStorage.setItem($LOCAL_USER_TYPE, usertype);
      localStorage.setItem($LOCAL_USER_TOKEN, token);

      return {
        loggedIn: true,
        userType: usertype,
      };
    }),

  logout: () =>
    set(() => {
      localStorage.removeItem($LOCAL_LOGGEDIN_KEY);
      localStorage.removeItem($LOCAL_USER_TYPE);
      localStorage.removeItem($LOCAL_USER_TOKEN);
      localStorage.removeItem("CartStorage");
      return {
        loggedIn: false,
        userType: "customer",
      };
    }),
}));

export const CartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      CartCount: 0,
      addTocart: (product) => {
        let { cart } = get();
        cart.push(product);
        set({ cart: cart, CartCount: cart.length });
      },
      removeFromcart: (id) => {
        let { cart } = get();
        let newcart = cart.filter((i) => i.id != id);
        set({ cart: newcart, CartCount: newcart.length });
      },
      resetCart:()=>{set({cart:[],CartCount:0})}
    }),
    {
      name: "CartStorage",
    },
  ),
);
