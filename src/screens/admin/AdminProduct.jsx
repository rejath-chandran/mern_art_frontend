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
  AllProduct,
} from "../../services/AdminQry.js";

import { useQueryClient } from "@tanstack/react-query";

const AdminProduct = () => {
  const client = useQueryClient();

  const prdcts = AllProduct();

  let columns = [
    {
      accessorKey: "_id",
      header: "ID",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "name",
      header: "name",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "image",
      header: "image",
      cell: (props) => (
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={props.getValue()} />
          </div>
        </div>
      ),
    },
    {
      accessorKey: "desc",
      header: "desc",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "category",
      header: "category",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "artist",
      header: "artist",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "price",
      header: "price",
      cell: (props) => <p>{props.getValue()}</p>,
    },
  ];

  let data = [{}];

  return (
    <div className=" bg-white h-screen rounded-lg p-6 relative">
      <div className="bg-gray-800 rounded-md container text-white w-ful h-full w-[75vw] overflow-auto">
        {prdcts.isFetched && <DataTable data={prdcts.data} columns={columns} />}
      </div>
    </div>
  );
};

export default AdminProduct;
