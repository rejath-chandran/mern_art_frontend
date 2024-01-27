import axios from "axios";
import { BASE_URL } from "../config/config";
import { data } from "autoprefixer";

let headers = {
  "Content-Type": "application/json"
};

const axioInstance = axios.create({ baseURL: BASE_URL });

axioInstance.interceptors.request.use(function(config){
 const Token=localStorage.getItem("user_token")
 if (Token){
  config.headers.Authorization=`Bearer ${Token}`;
 }
 return config
})


//category
export const GetAllCategory = async () => {
  let data = (await axioInstance.get("api/category", { headers })).data;
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


//Products
export const GetAllProduct = async () => {
  let data = (await axioInstance.get("api/product", { headers })).data;
  return data;
};
export const GetProductbyId = async (key) => {
  let id = key.queryKey[1];
  let data = (await axioInstance.get(`api/product/${id}`, { headers })).data;
  return data;
};
export const GetAllProductByCategory = async (name) => {
  let category = name.queryKey[1];
  let data = (
    await axioInstance.get(`api/product/category/${category}`, { headers })
  ).data;
  return data;
};
export const PostProduct = async (data) => {
  return await axioInstance.post("api/product", data, { headers });
};
export const PutProduct = async (data) => {
  return await axioInstance.put("api/product", data, { headers });
};
export const DeleteProduct = async (data) => {
  return await axioInstance.delete(`api/product/${data}`, { headers });
};


//Auction
export const GetAllAuction = async () => {
  let data = (await axioInstance.get("api/auction", { headers })).data;
  return data;
};
export const GetAuctionByID = async (key) => {
  let id = key.queryKey[1];
  let data = (await axioInstance.get(`api/auction/item/${id}`, { headers }))
    .data;
  return data;
};
export const PostAuction = async (data) => {
  return await axioInstance.post("api/auction", data, { headers });
};
export const PutAuction = async (data) => {
  return await axioInstance.put("api/auction", data, { headers });
};
export const DeleteAuction = async (data) => {
  return await axioInstance.delete(`api/auction/${data}`);
};


//Bid
export const PostBid = async (data) => {
  return await axioInstance.post("api/bid", data, { headers });
};
export const GetBidByID = async (key) => {
  let id = key.queryKey[1];
  let data = (await axioInstance.get(`api/bid/${id}`, { headers })).data;
  return data;
};


//order
export const PostOrder = async (data) => {
  return await axioInstance.post("api/payment", data, { headers });
};
export const VerifyOrder=async(data)=>{
  return await axioInstance.post("api/verify",data,{headers})
}

//wallet
export const WalletOrder=async(amount)=>{
  return (await axioInstance.get(`api/wallet/${amount}`,{headers})).data
}
export const WalletComplete=async(amount)=>{
  return await axioInstance.post(`api/wallet`,amount,{headers})
}
export const Walletbalance=async()=>{

  return (await axioInstance.get(`api/walletbalance`,{headers})).data
}