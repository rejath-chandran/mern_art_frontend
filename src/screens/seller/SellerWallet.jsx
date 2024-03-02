import React, { useState } from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { WalletRequest } from "../../services/AdminQry";
import { useQueryClient } from "@tanstack/react-query";

const SellerWallet = () => {
  const client = useQueryClient();
  const requst = WalletRequest(client);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const [mode, setModal] = useState(false);
  const CreateSubmit = () => {};

  const SubmitRequest = (data) => {
    resetField("amount");
    resetField("upi");
    setModal(false);
    requst.mutate(data);
  };

  return (
    <div className=" bg-white h-[89vh] p-6 relative">
      <div className="flex justify-between p-6">
        <div>
          <div role="tablist" className=" h-full tabs tabs-boxed">
            <NavLink
              exact={true}
              role="tab"
              className={({ isActive }) =>
                `${isActive ? "bg-black text-white" : ""} tab h-full`
              }
              to={"/seller/wallet"}
            >
              PROCESSING
            </NavLink>

            <NavLink
              role="tab"
              exact={true}
              className={({ isActive }) =>
                `${isActive ? "bg-black text-white" : ""} tab h-full`
              }
              to={"/seller/settled"}
            >
              SETTLED
            </NavLink>
          </div>
        </div>
        <button className="btn btn-success" onClick={() => setModal(true)}>
          REQUEST
        </button>
        {mode && (
          <dialog id="my_modal_2" className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">WITHDRAW REQUEST</h3>
              <span className="label">Amount:</span>
              <input
                {...register("amount", { min: 1000 })}
                type="number"
                placeholder="Type here"
                className="mb-2 input input-bordered w-full"
              />

              {errors.amount && (
                <span className="text-error">Minimum withdraw is 1000</span>
              )}

              <span className="label">UPI ID:</span>
              <input
                {...register("upi", { required: true })}
                type="text"
                placeholder="Type here"
                className="mb-2 input input-bordered w-full"
              />
              <div>
                {errors.upi && (
                  <span className="text-error">amount required</span>
                )}
              </div>
              <button
                className="btn btn-primary"
                onClick={handleSubmit(SubmitRequest)}
              >
                SUBMIT
              </button>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button
                onClick={() => {
                  resetField("amount");
                  resetField("upi");
                  setModal(false);
                }}
              >
                close
              </button>
            </form>
          </dialog>
        )}
      </div>
      <div className="bg-gray-800 rounded-md container text-white w-ful h-full w-[80vw]">
        <Outlet />
      </div>
    </div>
  );
};

export default SellerWallet;
