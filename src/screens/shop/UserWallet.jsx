import React from "react";
import useRazorpay from "react-razorpay";

const UserWallet = () => {
  const [Razorpay] = useRazorpay();

  const handlePayment = async (params) => {
    // const order = await createOrder(params)

    const options = {
      key: "rzp_test_1Ez7RpNLZ42xoT",
      amount: "10000",
      currency: "INR",
      name: "Art Galleria",
      description: "wallet payment",
      image: "https://d1s2w0upia4e9w.cloudfront.net/images/favicon.ico",
      order_id: "order_NQaCIM0cVIq9P4",
      handler: function (response) {
        console.log(response);
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
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
          <label className="mr-2">Amount:</label>
          <input
            type="number"
            // value={amount}
            // onChange={(e) => setAmount(e.target.value)}
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
