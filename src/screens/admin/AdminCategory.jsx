import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import Table from "../../components/Table";
import EditModal from "../../components/EditModal";
import { toast } from "react-toastify";
import {
  AllCategory,
  CreateCategory,
  UpdateCategory,
  RemoveCategory,
} from "../../services/AdminQry.js";
import { useQueryClient } from "@tanstack/react-query";

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

  return (
    <div className=" bg-white h-[100%] p-6 relative">
      <Header name={"Add Category"} openModal={openModal} />
      {isLoading ? (
        <>loading</>
      ) : (
        <>
          <Table submit={EditSubmit} Delete={Deletecat} data={data} />
        </>
      )}
      {error && <>something went wrong</>}
      {modal ? (
        <EditModal
          submit={CreateSubmit}
          details={FormValues}
          openModal={openModal}
        />
      ) : null}
    </div>
  );
};

export default AdminCategory;
