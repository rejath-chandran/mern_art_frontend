import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { GetAllProductByCategory } from "../../services/AdminApi";
import { AllProductByCategory } from "../../services/AdminQry";

// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: 50,
//     image: "https://placekitten.com/300/200", // replace with your image URL
//   },

// ];

const Category = () => {
  const { value } = useParams();

  const AllProduct = AllProductByCategory(value);
  console.log(AllProduct.data);
  let products = AllProduct.data || [];
  return (
    <>
      <div className="text-xl ml-12 pl-12 mt-6">
        {value?.toUpperCase() ?? ""}
      </div>
      <div className="m-12 container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <img src={product.image} className="w-full h-32 object-cover mb-4" />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">
        <span className="text-red-300">Artist: </span>
        {product.artist}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-600">
          ₹{product?.price}
        </span>
        <Link
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
          to={"/item/123"}
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default Category;
