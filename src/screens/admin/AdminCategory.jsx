import React, { useRef, useState } from "react";

import DataTable from "../../components/DataTable.jsx";
import AddCategory from "./AddCategory.jsx";

import { toast } from "react-toastify";
import {
  AllCategory,
  CreateCategory,
  UpdateCategory,
  RemoveCategory,
} from "../../services/AdminQry.js";
import { useQueryClient } from "@tanstack/react-query";
import AdminEditCategory from "./AdminEditCategory.jsx";

const AdminCategory = () => {
  const client = useQueryClient();
  const [modal, openModal] = useState(false);

  const { isLoading, error, data } = AllCategory();
  const create = CreateCategory(client);
  const update = UpdateCategory(client);
  const deletecategory = RemoveCategory(client);

  function EditSubmit(data) {
    update.mutate(JSON.stringify(data));
    toast.success("Updated");
  }

  function CreateSubmit(data) {
    create.mutate(JSON.stringify(data));
    toast.success("created");
  }

  function Deletecat(id) {
    deletecategory.mutate(id);
    toast.error("Deleted");
  }
  const FormValues = {
    image: "",
    name: "",
    desc: "",
  };

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
        <>
          <div className="avatar">
            <div className="w-24 rounded">
              <img src={props.getValue()} />
            </div>
          </div>
        </>
      ),
    },
    {
      accessorKey: "desc",
      header: "desc",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "",
      header: "action",
      cell: (props) => (
        <div className="flex">
          <AdminEditCategory data={props.row.original} edit={EditSubmit} />
          <button
            className="btn btn-error"
            onClick={() => Deletecat(props.row.original._id)}
          >
            DELETE
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className=" bg-white h-[100%] p-6 relative">
      <AddCategory create={CreateSubmit} />
      <div className="bg-gray-800 mt-5 rounded-md container text-white w-ful  w-[75vw] h-[85vh] overflow-y-auto">
        {isLoading ? (
          <>loading..</>
        ) : (
          <DataTable data={data} columns={columns} />
        )}
      </div>
    </div>
  );
};

export default AdminCategory;
