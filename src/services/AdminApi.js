import axios from "axios";
import { BASE_URL } from "../config/config";

const Token=localStorage.getItem('user_token')||""

const headers = {
  "Content-Type": "application/json",
  "Authorization":`Bearer ${Token}`,
};

const axioInstance = axios.create({ baseURL: BASE_URL });

//category
export const GetAllCategory = async () => {
  let data = (await axioInstance.get("api/category",{headers})).data;
  return data;
};
export const PostCategory = async (data) => {
  return await axioInstance.post("api/category", data, { headers });
};
export const PutCategory = async (data) => {
  return await axioInstance.put("api/category", data, { headers });
};
export const DeleteCategory = async (data) => {
  return await axioInstance.delete(`api/category/${data}`);
};

//auth
export const PostRegister = async (data) => {
  return await axioInstance.post("api/register", data, { headers });
};
export const PostUserLogin = async (data) => {
  return await axioInstance.post("api/login", data, { headers });
};
