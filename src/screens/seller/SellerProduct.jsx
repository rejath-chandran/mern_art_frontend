import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import Table from "../../components/Table";
import EditModal from "../../components/EditModal";
import { toast } from "react-toastify";

import {
  AllCategory,
  AllProduct,
  CreateProduct,
  RemoveProduct,
  UpdateProduct,
} from "../../services/AdminQry.js";

import { useQueryClient } from "@tanstack/react-query";
import ProductTable from "../../components/ProductTable.jsx";

const SellerProduct = () => {
  const client = useQueryClient();
  const [modal, openModal] = useState(false);
  const cat_data = AllCategory();

  const { isLoading, error, data } = AllProduct();
  const create = CreateProduct(client);
  const update = UpdateProduct(client);
  const remove = RemoveProduct(client);

  function EditSubmit(data) {
    console.log(data);
    update.mutate(JSON.stringify(data));
    toast.success("Updated");
  }

  function CreateSubmit(data) {
    console.log(data);
    create.mutate(JSON.stringify(data));
    toast.success("created");
  }

  function DeleteSubmit(id) {
    remove.mutate(id);
    toast.error("Deleted");
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
    "action",
  ];

  return (
    <div className=" bg-white h-[100%] p-6 relative">
      <Header name={"Add Products"} openModal={openModal} />
      {(
        <div className="bg-gray-800 rounded-md container text-white w-ful h-[83vh] w-[80vw]">
          <ProductTable
            DeleteSubmit={DeleteSubmit}
            EditSubmit={EditSubmit}
            category_list={cat_data}
          />
        </div>
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

export default SellerProduct;
