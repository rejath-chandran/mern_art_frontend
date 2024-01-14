import axios from "axios";
import { BASE_URL } from "../config/config";

const headers = {
  "Content-Type": "application/json",
};

const axioInstance = axios.create({ baseURL: BASE_URL });

//category
export const GetAllCategory = async () => {
  let data = (await axioInstance.get("api/category")).data;
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
