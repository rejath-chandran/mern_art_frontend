import React from "react";
import Usercart from "../../components/Usercart";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 50,
    image: "https://placekitten.com/300/200", // replace with your image URL
  },
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 50,
    image: "https://placekitten.com/300/200", // replace with your image URL
  },
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 50,
    image: "https://placekitten.com/300/200", // replace with your image URL
  },
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 50,
    image: "https://placekitten.com/300/200", // replace with your image URL
  },
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 50,
    image: "https://placekitten.com/300/200", // replace with your image URL
  },
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 50,
    image: "https://placekitten.com/300/200", // replace with your image URL
  },
];

const Cart = () => {
  const handleRemoveFromCart = (productId) => {};

  return (
    <div className="m-16 p-12">
      <Usercart cart={[...products]} onRemove={handleRemoveFromCart} />
    </div>
  );
};

export default Cart;
