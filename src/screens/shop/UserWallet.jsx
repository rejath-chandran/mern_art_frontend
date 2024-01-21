import React, { useRef } from "react";
import useRazorpay from "react-razorpay";
import { WalletOrder } from "../../services/AdminApi";
import { CreateWalletAmount, WalletB } from "../../services/AdminQry";
import { useQueryClient } from "@tanstack/react-query";

const UserWallet = () => {

  const client = useQueryClient()
 const wallet=CreateWalletAmount(client)
 const Balance=WalletB()
  const AmountRef=useRef(0)

  const [Razorpay] = useRazorpay();

  const handlePayment = async (params) => {
    const res=await WalletOrder(AmountRef.current)
    const options = {
      key: "rzp_test_1Ez7RpNLZ42xoT",
      amount: res.amount,
      currency: "INR",
      name: "Art Galleria",
      description: "wallet payment",
      image: "https://d1s2w0upia4e9w.cloudfront.net/images/favicon.ico",
      order_id: res.id,
      handler: function (response) {
        let data={
        "amount":res.amount
        }
          wallet.mutate(data)
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
  };
  return (
    <div>
      <div className="p-4 border rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Wallet</h2>

        <div className="flex items-center mb-4">
          <label className="mr-2">Balance:</label>
          <label
            
          >{Balance.isLoading?<>Loading...</>:<>{Balance.data.amount}</>}</label>
        </div>

        <div className="flex items-center mb-4">
          <label className="mr-2">Amount:</label>
          <input
            type="number"
            onChange={(e) =>AmountRef.current=e.target.value}
            className="border p-2 rounded-md"
          />
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handlePayment}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default UserWallet;
