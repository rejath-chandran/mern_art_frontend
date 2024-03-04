import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { AllAuction, AllAuctionSeller, DeleteSellerAuction } from "../services/AdminQry";
import { useQueryClient } from "@tanstack/react-query";
import Countdown from "react-countdown";
import CountDownTimer from "./CountDownTimer";

function AuctionTable() {
  const client = useQueryClient();

  const { data, isLoading } = AllAuctionSeller();
  const DeleteAuction = DeleteSellerAuction(client);

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
      header: "EXPIRE IN",
      cell: (p) => {
        return (
          <div>
            <Countdown
              date={Date.now() + (new Date(p.row.original.expire) - new Date())}
              renderer={CountDownTimer}
            />
          </div>
        );
      },
    },
    {
      header: "ACTION",
      cell: (p) => {
        return (
          <span
            key={p.row.original._id}
            onClick={() => {
              DeleteAuction.mutate(p.row.original._id);
            }}
            className="btn btn-outline btn-error"
          >
            DELETE
          </span>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className=" h-full overflow-x-auto">
      {isLoading ? (
        <div className="skeleton w-full h-full bg-slate-900 rounded-sm"></div>
      ) : (
        <table className="table">
          <thead className="text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th>{header.column.columnDef.header}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AuctionTable;
