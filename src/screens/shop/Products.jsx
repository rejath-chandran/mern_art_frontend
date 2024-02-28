import React from "react";
import { ProductByid } from "../../services/AdminQry";
import { useParams } from "react-router";
import { CartStore } from "../../store";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
const reviews = [
  {
    id: 1,
    title: "Can't say enough good things",
    rating: 5,
    content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
    author: "Risako M",
    date: "May 16, 2021",
    datetime: "2021-01-06",
  },
  {
    id: 1,
    title: "Can't say enough good things",
    rating: 5,
    content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
    author: "Risako M",
    date: "May 16, 2021",
    datetime: "2021-01-06",
  },
  {
    id: 1,
    title: "Can't say enough good things",
    rating: 5,
    content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
    author: "Risako M",
    date: "May 16, 2021",
    datetime: "2021-01-06",
  },
  // More reviews...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
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
          <div className="h-screen grid grid-cols-12 p-5">
            <div className="col-span-4 bg-white">
              {/*  */}
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-white dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="100"
                    className="w-full mt-4 px-6 z-[50]"
                  >
                    <div className="avatar">
                      <div className="w-full h-full rounded-md ">
                        <img src={Item.data.image} />
                      </div>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>

            <div className="col-span-8 h-full rounded-lg">
              <div className="h-full p-5 bg-slate-50">
                <h2 className="text-3xl font-bold mb-4">
                  {Item.data.name.toUpperCase()}
                </h2>
                <label className="swap text-2xl m-1">🖌️</label>
                <Link
                  className="text-lg font-mono link-success"
                  to={`/artist/${Item.data.artistId}`}
                >
                  {Item.data.artist}
                </Link>

                <div className="text-gray-600 mb-4 ">
                  <div className="overflow-x-auto">
                    <table className="table">
                      <tbody>
                        {Item.data.desc.split(",").map((item) => (
                          <>
                            <tr>
                              {item.split("-").map((i) => (
                                <>
                                  <td>{i}</td>
                                </>
                              ))}
                            </tr>
                          </>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl mx-6 font-bold text-blue-500">
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

                <div className="h-[60vh] mt-10 bg-blue-100 p-6 rounded-lg  overflow-auto no-scrollbar">
                  <div className=" ">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
                      >
                        <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                          <div className="flex items-center xl:col-span-1">
                            <div className="flex items-center">
                              {[0].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    review.rating > rating
                                      ? "text-yellow-400"
                                      : "text-gray-200",
                                    "h-5 w-5 flex-shrink-0",
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="ml-3 text-sm text-gray-700">
                              {review.rating}
                              <span className="sr-only"> out of 5 stars</span>
                            </p>
                          </div>

                          <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                            <h3 className="text-sm font-medium text-gray-900">
                              {review.title}
                            </h3>

                            <div
                              className="mt-3 space-y-6 text-sm text-gray-500"
                              dangerouslySetInnerHTML={{
                                __html: review.content,
                              }}
                            />
                          </div>
                        </div>

                        <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                          <p className="font-medium text-gray-900">
                            {review.author}
                          </p>
                          <time
                            dateTime={review.datetime}
                            className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                          >
                            {review.date}
                          </time>
                        </div>
                      </div>
                    ))}
                  </div>
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

{
  /* <div className="h-full">
<div className="container mx-auto mt-8 flex  h-full">
  <div className="w-full md:w-1/2">
    <img
      src={Item.data.image}
      className="h-[70vh] w-[60vw] object-cover mb-8 rounded-md"
    />
  </div>
  <div className="w-full md:w-1/2 px-4  mt-[3rem]">
    <h2 className="text-2xl font-semibold mb-4">
      {Item.data.name.toUpperCase()}
    </h2>
    <Link
      className="text-blue-400 font-bold"
      to={`/artist/${Item.data.artistId}`}
    >
      Artist: {Item.data.artist}
    </Link>
    <div className="text-gray-600 mb-4 ">
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {Item.data.desc.split(",").map((item) => (
              <>
                <tr>
                  {item.split("-").map((i) => (
                    <>
                      <td>{i}</td>
                    </>
                  ))}
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="flex justify-between items-center mb-4">
      <span className="text-2xl mx-6 font-bold text-blue-500">
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
</div> */
}
