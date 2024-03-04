import React from "react";
import { AllAuctionSellerSold } from "../../services/AdminQry";
import DataTable from "../../components/DataTable";
function SoldAuction() {
  const auction = AllAuctionSellerSold();

  let columns = [
    {
      accessorKey: "_id",
      header: "ID",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "name",
      header: "NAME",
      cell: (p) => <p>{p.getValue()}</p>,
    },
    {
      accessorKey: "image",
      header: "IMAGE",
      cell: (p) => (
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={p.getValue()} />
          </div>
        </div>
      ),
    },
    {
      accessorKey: "desc",
      header: "DESC",
      cell: (p) => <p>{p.getValue()}</p>,
    },
    {
      accessorKey: "category",
      header: "CATEGORY",
      cell: (p) => <p>{p.getValue()}</p>,
    },
    {
      accessorKey: "artist",
      header: "ARTIST",
      cell: (p) => <p>{p.getValue()}</p>,
    },
    {
      accessorKey: "winner",
      header: "WINNER",
      cell: (p) => <p>{p.getValue()}</p>,
    },
  ];
  return (
    <div>
      {auction.isFetched && (
        <>
          <DataTable columns={columns} data={auction.data} />
        </>
      )}
    </div>
  );
}

export default SoldAuction;
