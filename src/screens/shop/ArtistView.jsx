import React from "react";
import { useParams } from "react-router";
import { AllProductByArtist } from "../../services/AdminQry";

function ArtistView() {
  const { id } = useParams();
  const { data, isLoading } = AllProductByArtist(id);
  return (
    <div className="w-full h-full bg-fuchsia-100">
      <div className="grid grid-cols-12 h-full w-full">
        <div className="col-span-2 px-7 pt-7">
          <div className="grid mt-4">
            <div className="ml-5 avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <span className="px-5 pt-3">nandana ranjan</span>
            <span className="p-3">
              Followers : <span className="font-bold">300</span>{" "}
            </span>
            <button className="btn btn-outline">Follow</button>
          </div>
        </div>
        <div className="col-span-10 flex flex-wrap p-6 overflow-y-auto bg-red-50">
          <>
            {isLoading ? (
              <>loading..</>
            ) : (
              <>
                {data.map((item) => (
                  <div className="m-3 card w-96 h-96 bg-base-100 shadow-xl">
                    <figure>
                      <img src={item.image} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.name}</h2>
                      <p className="text-2xl">₹ {item.price}</p>
                      <div className="card-actions justify-end">
                        <button className="btn">View the Art</button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
}

export default ArtistView;
