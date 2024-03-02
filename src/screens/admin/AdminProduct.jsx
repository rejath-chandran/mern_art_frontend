import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import Table from "../../components/Table";
import EditModal from "../../components/EditModal";
import { toast } from "react-toastify";
import QRCode from "react-qr-code";
import DataTable from "../../components/DataTable";

import {
  AllCategory,
  CreateCategory,
  UpdateCategory,
  RemoveCategory,
} from "../../services/AdminQry.js";

import { useQueryClient } from "@tanstack/react-query";

const AdminProduct = () => {
  // const client = useQueryClient();
  // const [modal, openModal] = useState(false);

  // const { isLoading, error, data } = AllCategory();

  // const create = CreateCategory(client);
  // const update = UpdateCategory(client);
  // const remove = RemoveCategory(client);

  // function EditSubmit(data) {
  //   update.mutate(JSON.stringify(data));
  //   toast.success("Updated");
  // }

  // function CreateSubmit(data) {
  //   console.log(data);
  //   // create.mutate(JSON.stringify(data));
  //   toast.success("created");
  // }

  // function DeleteSubmit(id) {
  //   deletecategory.mutate(id);
  //   toast.error("Deleted");
  // }

  let columns = [
    {
      accessorKey: "_id",
      header: "ID",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "name",
      header: "name",
      cell: (props) => (
        <div>
          <QRCode value="upi://pay?pa=rejathchandran13-1@okhdfcbank&cu=INR" />
        </div>
      ),
    },
  ];

  let data = [{}, {}, {}, {}];

  return (
    <div className=" bg-white h-screen rounded-lg p-6 relative">
      <div className="bg-gray-800 rounded-md container text-white w-ful h-full w-[80vw]">
        <DataTable data={data} columns={columns} />
      </div>
      {/* <QRCode value="upi://pay?pa=rejathchandran13-1@okhdfcbank&cu=INR" /> */}
    </div>
  );
};

export default AdminProduct;
