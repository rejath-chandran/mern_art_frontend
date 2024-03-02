import React from "react";
import { GetAdminWalletRequest } from "../../services/AdminQry";
import DataTable from "../../components/DataTable";
import EditWalletStatus from "./EditWalletStatus";
function NewWalletTable() {
  const wallet = GetAdminWalletRequest("processed");
  let columns = [
    {
      accessorKey: "_id",
      header: "ID",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "withdraw",
      header: "REQUEST AMOUNT",
      cell: (props) => <p>₹{props.getValue()}</p>,
    },
    {
      accessorKey: "amount",
      header: "COMMISSION AMOUNT",
      cell: (props) => <p>₹{props.getValue()}</p>,
    },
    {
      accessorKey: "comm",
      header: "COMMISSION RATE",
      cell: (props) => <p>{props.getValue()} %</p>,
    },
    {
      accessorKey: "upi",
      header: "UPI ID",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      header: "ACTION",
      cell: (props) => <EditWalletStatus data={props.row.original} />,
    },
  ];
  return (
    <>
      {wallet.isLoading ? (
        <>loading..</>
      ) : (
        <div className="w-full h-full overflow-auto">
          <DataTable columns={columns} data={wallet.data} />
        </div>
      )}
    </>
  );
}

export default NewWalletTable;
