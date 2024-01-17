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
    console.log(data);
    create.mutate(JSON.stringify(data));
    toast.success("created");
  }

  function DeleteSubmit(id) {
    // remove.mutate(id);
    console.log(id);
    toast.error("ended auction");
  }

  const FormValues = {
    name: "",
    image: "",
    desc: "",
    category: " ",
    price: " ",
  };
  const heads = [
    "image",
    "name",
    "category",
    "artist",
    "price",
    "desc",
    "winner",
    "price",
    "action",
  ];
  return (
    <div className=" bg-white h-[100%] p-6 relative">
      <Header name={"Add Auctions"} openModal={openModal} type={"auction"} />
      {isLoading ? (
        <>loading</>
      ) : (
        <>
          <Table
            submit={EditSubmit}
            Delete={DeleteSubmit}
            data={data}
            heads={heads}
            actions={"auction"}
            selection={cat_data.data}
          />
        </>
      )}
      {error && <>something went wrong</>}
      {modal ? (
        <EditModal
          submit={CreateSubmit}
          details={FormValues}
          openModal={openModal}
          selections={cat_data.data}
        />
      ) : null}
    </div>
  );
};

export default SellerAuction;
