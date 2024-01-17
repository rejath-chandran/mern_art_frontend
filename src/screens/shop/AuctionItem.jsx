import React from "react";
import { useParams } from "react-router";
import { AuctionByID, BidByID, CreateBid } from "../../services/AdminQry";
import { useLoggedInStore } from "../../store";
import { useQueryClient } from "@tanstack/react-query";

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
                <p className="text-gray-600 mb-4">{data?.desc}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-blue-500">
                    ₹{data?.price}
                  </span>

                  <>
                    {isLoggedIN && userType == "customer" ? (
                      <>
                        <button
                          className="bg-blue-500 text-white px-6 py-3 rounded-md"
                          onClick={() => CreateNewBid(1000)}
                        >
                          BID 1000+
                        </button>
                        <button
                          className="bg-blue-500 text-white px-6 py-3 rounded-md"
                          onClick={() => CreateNewBid(5000)}
                        >
                          BID 5000+
                        </button>
                        <button
                          className="bg-blue-500 text-white px-6 py-3 rounded-md"
                          onClick={() => CreateNewBid(10000)}
                        >
                          BID 10000+
                        </button>
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
