import React, { useRef, useState } from "react";
import Usercart from "../../components/Usercart";
import { CartStore } from "../../store";
import { MakeOrder } from "../../services/AdminQry.js";
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [Razorpay] = useRazorpay();
  const { cart, resetCart } = CartStore();

  const Order = MakeOrder(Razorpay, navigate, resetCart);
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const adress = useRef("");

  const CheckOutHandler = (e) => {
    e.preventDefault();
    let data = {
      name: name.current,
      email: email.current,
      phone: phone.current,
      adress: adress.current,
      cart: cart,
    };
    Order.mutate(data);
    // resetCart();
  };

  return (
    <div>
      <div className="container mx-auto mt-1 flex max-sm:flex-wrap">
        <div className="w-full md:w-2/4">
          <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
            <form onSubmit={CheckOutHandler}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => (name.current = e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => (email.current = e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={(e) => (phone.current = e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-600"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  onChange={(e) => (adress.current = e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="m-16 p-12">
            <Usercart cart={[...cart]} Checkout={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
