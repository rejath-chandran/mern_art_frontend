import React from "react";

const Products = () => {
  const product = {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 50,
    image: "https://placekitten.com/300/200", // replace with your image URL
  };
  return (
    <div>
      <div className="container mx-auto mt-8 flex  h-[80vh]">
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="h-[60vh] w-[60vw] object-cover mb-8 rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 px-4  mt-[3rem]">
          <h2 className="text-2xl font-semibold mb-4">
            {product.name.toUpperCase()}
          </h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-blue-500">
              ₹{product.price}
            </span>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
