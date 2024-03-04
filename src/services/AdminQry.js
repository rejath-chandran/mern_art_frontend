import { useQuery, useMutation } from "@tanstack/react-query";

import { toast } from "react-toastify";
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
  GetAuctionByID,
  PostBid,
  GetBidByID,
  GetProductbyId,
  PostOrder,
  VerifyOrder,
  WalletComplete,
  Walletbalance,
  GetuserOrder,
  PostMakeasSeller,
  GetSellerOrders,
  UpdateSellerOrderStatus,
  GetProductByArtist,
  DeleteAuction,
  PostSytem,
  GetSytem,
  PostWalletRqt,
  GetUserWalletTable,
  GetADMINWalletTable,
  PostAdminWalletStatus,
  GetAdminDashboard,
  GetAllUsers,
  PostMakeSupport,
  DeleteMakeSupport,
  GetAllMakeSupport,
  GetAllComment,
  PostComment,
  GetProductbyAristSeller,
  GetAllAuctionForSeller,
  GetAllAuctionForSellerSold,
  PostAccountDetails,
  GetUserAccountDetailsByid
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

export function AllProductByArtist(id) {
  return useQuery({
    queryKey: ["all-product-artist", id],
    queryFn: GetProductByArtist,
  });
}
export function AllSellerProducts() {
  return useQuery({
    queryKey: ["all-product-artist-seller"],
    queryFn: GetProductbyAristSeller,
  });
}

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

export function AllApplicationUsers() {
  return useQuery({
    queryKey: ["all-users-app"],
    queryFn: GetAllUsers,
  });
}
export function ProductByid(id) {
  return useQuery({
    queryKey: ["product-id", id],
    queryFn: GetProductbyId,
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
export function AllAuctionSeller() {
  return useQuery({
    queryKey: ["all-auction-seller"],
    queryFn: GetAllAuctionForSeller,
  });
}
export function AllAuctionSellerSold() {
  return useQuery({
    queryKey: ["all-auction-seller-sold"],
    queryFn: GetAllAuctionForSellerSold,
  });
}
export function AuctionByID(id) {
  return useQuery({
    queryKey: ["auction-id", id],
    queryFn: GetAuctionByID,
  });
}
export function CreateAuction(client) {
  return useMutation({
    mutationFn: (data) => PostAuction(data),
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ["all-auction-seller"] });
    },
    onError: () => {},
  });
}
export function DeleteSellerAuction(client) {
  return useMutation({
    mutationFn: (data) => DeleteAuction(data),
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ["all-auction-seller"] });
    },
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
//Bid

export function CreateBid(client) {
  return useMutation({
    mutationFn: (data) => PostBid(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["auction-id"] });
      client.invalidateQueries({ queryKey: ["bid-id"] });
    },
    onError: () => {
      toast.error("wallet balance low");
    },
  });
}
export function BidByID(id) {
  return useQuery({
    queryKey: ["bid-id", id],
    queryFn: GetBidByID,
  });
}

//order
export function GetUserOrders() {
  return useQuery({
    queryKey: ["user-order-dash"],
    queryFn: GetuserOrder,
  });
}
export function MakeOrder(Razorpay, navigate, resetCart) {
  return useMutation({
    mutationFn: (data) => PostOrder(data),
    onSuccess: (res) => {
      const options = {
        key: "rzp_test_1Ez7RpNLZ42xoT",
        amount: res.data.amount,
        currency: "INR",
        name: "Art Galleria",
        description: "wallet payment",
        image: "https://d1s2w0upia4e9w.cloudfront.net/images/favicon.ico",
        order_id: res.data.order_id,
        handler: function (response) {
          let data = {
            order_id: response.razorpay_order_id,
          };
          resetCart();
          VerifyOrder(data);
          navigate("/");
        },
        notes: {
          address: "Galleria India",
        },
        theme: {
          color: "#000000",
        },
      };
      const rzp1 = new Razorpay(options);
      rzp1.open();
    },
  });
}
export function WalletB() {
  return useQuery({
    queryKey: ["shop-wallet-balance"],
    queryFn: Walletbalance,
  });
}
export function CreateWalletAmount(client) {
  return useMutation({
    mutationFn: (data) => WalletComplete(data),
    onSuccess: (res) => {
      console.log("log", res);
      client.invalidateQueries({ queryKey: ["shop-wallet-balance"] });
    },
  });
}

export function GetAllSellerOrders(data) {
  return useQuery({
    queryKey: ["all-user-order", data],
    queryFn: GetSellerOrders,
  });
}
export function PostOrderUpdate(client) {
  return useMutation({
    mutationFn: (data) => UpdateSellerOrderStatus(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["all-user-order"] });
    },
  });
}
//account
export function UserToSeller() {
  return useMutation({
    mutationFn: () => PostMakeasSeller(),
    onSuccess: () => {
      toast.success("Now You're Seller too!!!");
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

export function PostSystemDetail() {
  return useMutation({
    mutationFn: (data) => PostSytem(data),
    onSuccess: () => {
      toast.success("Now You're Seller too!!!");
    },
  });
}
export function GetSystemDetails() {
  return useQuery({
    queryKey: ["system-details"],
    queryFn: GetSytem,
  });
}
export function GetUserWalletRequest(id) {
  return useQuery({
    queryKey: ["user-wallet-request", id],
    queryFn: GetUserWalletTable,
  });
}
export function GetAdminWalletRequest(id) {
  return useQuery({
    queryKey: ["admin-wallet-request", id],
    queryFn: GetADMINWalletTable,
  });
}

export function WalletRequest(client) {
  return useMutation({
    mutationFn: (data) => PostWalletRqt(data),
    onSuccess: () => {
      toast.success("request sucessfull");
      client.invalidateQueries({ queryKey: ["user-wallet-request"] });
    },
  });
}
export function AdminWalletChangeStatus(client) {
  return useMutation({
    mutationFn: (data) => PostAdminWalletStatus(data),
    onSuccess: () => {
      toast.success("changed status");
      client.invalidateQueries({ queryKey: ["admin-wallet-request"] });
    },
  });
}

export function AdminDashoard() {
  return useQuery({
    queryKey: ["admin-dash"],
    queryFn: GetAdminDashboard,
  });
}

export function UserMakeSupport() {
  return useMutation({
    mutationFn: (data) => PostMakeSupport(data),
  });
}

export function AdminDeleteSupport(client) {
  return useMutation({
    mutationFn: (data) => DeleteMakeSupport(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["all-support"] });
    },
  });
}

export function AdminAllSupport() {
  return useQuery({
    queryKey: ["all-support"],
    queryFn: GetAllMakeSupport,
  });
}

export function GetCommentByid(id) {
  return useQuery({
    queryKey: ["all-comment", id],
    queryFn: GetAllComment,
  });
}
export function MakeCommentbyUser() {
  return useMutation({
    mutationFn: (data) => PostComment(data),
  });
}
export function UpdateAccountDetails(client) {
  return useMutation({
    mutationFn:(data)=>PostAccountDetails(data)
  })
}
export function GetUserAcccountDetails() {
  return useQuery({
    queryKey:["user-account-details"],
    queryFn:GetUserAccountDetailsByid
  })
}