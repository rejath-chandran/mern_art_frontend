import React, { useRef, useState } from "react";
import Usercart from "../../components/Usercart";
import { CartStore } from "../../store";
import { MakeOrder } from "../../services/AdminQry.js";
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const navigate = useNavigate();
  const [Razorpay] = useRazorpay();
  const { cart, resetCart } = CartStore();

  const Order = MakeOrder(Razorpay, navigate, resetCart);
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const adress = useRef("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const CheckOutHandler = (data) => {
    let newdata = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      adress: data.address,
      cart: cart,
    };

    Order.mutate(newdata);
  };

  return (
    <div>
      <div className="container mx-auto mt-1 flex max-sm:flex-wrap">
        <div className="w-full md:w-2/4">
          <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
            <form onSubmit={handleSubmit(CheckOutHandler)}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => (name.current = e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              {errors.name && <span className="text-error">name is need</span>}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => (email.current = e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              {errors.email && (
                <span className="text-error">email is needed</span>
              )}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone
                </label>
                <input
                  {...register("phone", {
                    required: true,
                    maxLength: 10,
                    minLength: 10,
                    pattern: {
                      value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    },
                  })}
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={(e) => (phone.current = e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              {errors.phone && (
                <span className="text-error">enter valid phone number</span>
              )}
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-600"
                >
                  Address
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  id="address"
                  name="address"
                  onChange={(e) => (adress.current = e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              {errors.address && (
                <span className="text-error">address needed</span>
              )}
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
