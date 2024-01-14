import { useQuery, useMutation } from "@tanstack/react-query";

import {
  GetAllCategory,
  PostCategory,
  PutCategory,
  DeleteCategory,
  PostRegister,
  PostUserLogin,
} from "./AdminApi";

export function AllCategory() {
  return useQuery({
    queryKey: ["all-category"],
    queryFn: GetAllCategory,
  });
}

export function CreateCategory(client) {
  return useMutation({
    mutationFn: (data) => PostCategory(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["all-category"] });
    },
  });
}
export function UpdateCategory(client) {
  return useMutation({
    mutationFn: (data) => PutCategory(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["all-category"] });
    },
  });
}
export function RemoveCategory(client) {
  return useMutation({
    mutationFn: (data) => DeleteCategory(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["all-category"] });
    },
  });
}

//Register
export function RegisterUser(notify) {
  return useMutation({
    mutationFn: (data) => PostRegister(data),
    onError: () => notify(),
  });
}
export function LoginUser(setLogin, notify) {
  return useMutation({
    mutationFn: (data) => PostUserLogin(data),
    onSuccess: (res) => {
      setLogin("customer", res.data.Token);
    },
    onError: () => notify(),
  });
}
