import { useQuery, useMutation } from "@tanstack/react-query";

import {
  GetAllCategory,
  PostCategory,
  PutCategory,
  DeleteCategory,
  PostRegister,
  PostUserLogin,
  PostProduct,
  GetAllProduct,
  PutProduct,
  DeleteProduct,
  GetAllProductByCategory,
  PostAuction,
  GetAllAuction,
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
      setLogin(res.data.type, res.data.Token);
    },
    onError: () => {
      notify();
    },
  });
}

//PRoduct

export function CreateProduct(client) {
  return useMutation({
    mutationFn: (data) => PostProduct(data),
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ["all-product"] });
    },
    onError: () => {},
  });
}

export function AllProduct() {
  return useQuery({
    queryKey: ["all-product"],
    queryFn: GetAllProduct,
  });
}
export function AllProductByCategory(name) {
  return useQuery({
    queryKey: ["all-product-category", name],
    queryFn: (name) => GetAllProductByCategory(name),
  });
}

export function UpdateProduct(client) {
  return useMutation({
    mutationFn: (data) => PutProduct(data),
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ["all-product"] });
    },
    onError: () => {},
  });
}
export function RemoveProduct(client) {
  return useMutation({
    mutationFn: (data) => DeleteProduct(data),
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ["all-product"] });
    },
    onError: () => {},
  });
}

//Auction
export function AllAuction() {
  return useQuery({
    queryKey: ["all-auction"],
    queryFn: GetAllAuction,
  });
}
export function CreateAuction(client) {
  return useMutation({
    mutationFn: (data) => PostAuction(data),
    onSuccess: (res) => {
      // client.invalidateQueries({ queryKey: ["all-product"] })
    },
    onError: () => {},
  });
}
export function UpdateAuction(client) {
  return useMutation({
    mutationFn: (data) => DeleteProduct(data),
    onSuccess: (res) => {
      // client.invalidateQueries({ queryKey: ["all-product"] })
    },
    onError: () => {},
  });
}
