import React from "react";
import { ProductByid } from "../../services/AdminQry";
import { useParams } from "react-router";
import { CartStore } from "../../store";
import { Link } from "react-router-dom";
const Products = () => {
  const { id } = useParams();
  const Item = ProductByid(id);
  const { addTocart, cart } = CartStore();
  const IsinCart = cart.some((item) => item.id == id);
  return (
    <>
      {Item.isLoading ? (
        <>Loadin..</>
      ) : (
        <>
          <div>
            <div className="container mx-auto mt-8 flex  h-[80vh]">
              <div className="w-full md:w-1/2">
                <img
                  src={Item.data.image}
                  className="h-[60vh] w-[60vw] object-cover mb-8 rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 px-4  mt-[3rem]">
                <h2 className="text-2xl font-semibold mb-4">
                  {Item.data.name.toUpperCase()}
                </h2>
                <p className="text-gray-600 mb-4">{Item.data.desc}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-blue-500">
                    ₹{Item.data.price}
                  </span>
                  {IsinCart ? (
                    <>
                      <Link
                        className="bg-green-600 text-white px-6 py-3 rounded-md"
                        to={"/cart"}
                      >
                        Checkout Cart
                      </Link>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-blue-500 text-white px-6 py-3 rounded-md"
                        onClick={() =>
                          addTocart({
                            id: id,
                            name: Item.data.name,
                            description: Item.data.desc,
                            image: Item.data.image,
                            price: parseInt(Item.data.price),
                          })
                        }
                      >
                        Add To Cart
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Products;
