import React from "react";
import { useParams } from "react-router";
import { AuctionByID, BidByID, CreateBid } from "../../services/AdminQry";
import { useLoggedInStore } from "../../store";
import { useQueryClient } from "@tanstack/react-query";

import Countdown from "react-countdown";

const AuctionItem = () => {
  const client = useQueryClient();
  const { id } = useParams();
  const { data, isLoading } = AuctionByID(id);
  const newbid = CreateBid(client);
  const ItemBids = BidByID(id);
  const isLoggedIN = useLoggedInStore((state) => state.loggedIn);
  const userType = useLoggedInStore((state) => state.userType);

  const CreateNewBid = (amount) => {
    let data = {
      amount: amount,
      item: id,
    };
    newbid.mutate(data);
  };
  return (
    <>
      {isLoading ? (
        <>Loading........</>
      ) : (
        <>
          <div>
            <div className="container mx-auto mt-8 flex  h-[80vh]">
              <div className="w-full md:w-1/2">
                <img
                  src={data?.image}
                  className="h-[60vh] w-[60vw] object-cover mb-8 rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 px-4  mt-[3rem]">
                <h2 className="text-2xl font-semibold mb-4">
                  {data?.name.toUpperCase()}
                </h2>
                <div className="text-gray-600 mb-4">
                  <div className="overflow-x-auto">
                    <table className="table">
                      <tbody>
                        {data.desc.split(",").map((item) => (
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
                  <span className="text-xl font-bold text-blue-500">
                    ₹{data?.price}
                  </span>

                  <>
                    {isLoggedIN && userType == "customer" ? (
                      <>
                        <input
                          type="number"
                          className="bg-blue-100 h-12 outline-none p-6 text-black"
                          placeholder="Enter amount"
                        />
                        <button
                          className="bg-blue-500 text-white px-6 py-3 rounded-md"
                          onClick={() => CreateNewBid(10000)}
                        >
                          BID
                        </button>
                        <Countdown
                          date={Date.now() + 90000000}
                          // renderer={renderer}
                        />
                        ,
                      </>
                    ) : (
                      <>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-md">
                          Login to Bid
                        </button>
                      </>
                    )}
                  </>
                </div>
                <div className="h-[250px] mx-auto overflow-auto p-1 m-4">
                  <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-auto">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="py-2 px-4 border-b">Bidder</th>
                        <th className="py-2 px-4 border-b">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ItemBids.isLoading ? (
                        <>loading...</>
                      ) : (
                        <>
                          {ItemBids.data.map((i) => (
                            <tr>
                              <td className="py-1 px-5 border-b">
                                {i.bidder.email}
                              </td>
                              <td className="py-1 px-5 border-b">{i.amount}</td>
                            </tr>
                          ))}
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AuctionItem;
