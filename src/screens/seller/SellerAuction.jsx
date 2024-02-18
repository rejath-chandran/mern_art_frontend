import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import Table from "../../components/Table";
import EditModal from "../../components/EditModal";
import { toast } from "react-toastify";

import {
  AllAuction,
  AllCategory,
  AllProduct,
  CreateAuction,
  CreateProduct,
  RemoveProduct,
  UpdateProduct,
} from "../../services/AdminQry.js";

import { useQueryClient } from "@tanstack/react-query";
import AuctionAdder from "../../components/AuctionAdder.jsx";
import { Outlet } from "react-router";

const SellerAuction = () => {
  const client = useQueryClient();
  const [modal, openModal] = useState(false);
  const cat_data = AllCategory();

  const { isLoading, error, data } = AllAuction();

  const create = CreateAuction(client);
  const update = UpdateProduct(client);
  const remove = RemoveProduct(client);

  function EditSubmit(data) {
    update.mutate(JSON.stringify(data));
    toast.success("Updated");
  }

  function CreateSubmit(data) {
    create.mutate(JSON.stringify(data));
    toast.success("created");
  }

  function DeleteSubmit(id) {
    console.log(id);
    toast.error("ended auction");
  }

  return (
    <div className=" bg-white h-[89vh] p-6 relative">
      <Header name={"Add Auctions"} openModal={openModal} type={"auction"}>
        <AuctionAdder name={"Add Auctions"} submit={CreateSubmit} />
      </Header>
      <div className="bg-gray-800 rounded-md container text-white w-ful h-full w-[80vw]">
        <Outlet />
      </div>
    </div>
  );
};

export default SellerAuction;
