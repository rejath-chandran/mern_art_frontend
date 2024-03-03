import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  AllAuction,
  AllProduct,
  AllSellerProducts,
  DeleteSellerAuction,
} from "../services/AdminQry";
import { useQueryClient } from "@tanstack/react-query";
import Countdown from "react-countdown";
import CountDownTimer from "./CountDownTimer";
import EditProduct from "./EditProduct";

function ProductTable({ DeleteSubmit, EditSubmit, category_list }) {
  const client = useQueryClient();
  const { data, isLoading } = AllSellerProducts();

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
      cell: (p) => (
        <div className="overflow-auto">
          <table className="table w-full h-full">
            {p
              .getValue()
              .split(",")
              .map((item) => (
                <tr>
                  {item.split("-").map((row) => (
                    <td>{row}</td>
                  ))}
                </tr>
              ))}
          </table>
        </div>
      ),
    },
    {
      accessorKey: "category",
      header: "category",
      cell: (p) => <p>{p.getValue()}</p>,
    },
    {
      accessorKey: "price",
      header: "PRICE",
      cell: (p) => <p> ₹{p.getValue()}</p>,
    },
    {
      header: "ACTION",
      cell: (p) => (
        <div className="flex">
          <EditProduct
            data={p.row.original}
            EditSubmit={EditSubmit}
            category_list={category_list}
          />
          <span
            key={p.row.original._id}
            onClick={() => DeleteSubmit(p.row.original._id)}
            className="btn btn-outline btn-error mx-3"
          >
            DELETE
          </span>
        </div>
      ),
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

export default ProductTable;
