import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import StatusSelector from "./StatusSelector";
import { GetAllSellerOrders } from "../services/AdminQry";
import { useState } from "react";

function OrderTable({ data }) {
  //  const [data,setOrder]=useState([{
  //     id: "1",
  //     name: "",
  //     email:"",
  //     phone:"dsf",
  //     adress:"ddd",
  //     product:"dd",
  //     status:"processing"
  //   }])

  let columns = [
    {
      accessorKey: "id",
      header: "ID",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "name",
      header: "NAME",
      cell: (p) => <p>{p.getValue()}</p>,
    },
    {
      accessorKey: "email",
      header: "EMAIL",
      cell: (p) => <p>{p.getValue()}</p>,
    },
    {
      accessorKey: "phone",
      header: "PHONE",
      cell: (p) => <p>{p.getValue()}</p>,
    },
    {
      accessorKey: "adress",
      header: "ADRESS",
      cell: (p) => <p>{p.getValue()}</p>,
    },
    {
      accessorKey: "product",
      header: "ART",
      cell: (p) => <p>{p.getValue()}</p>,
    },
    {
      accessorKey: "status",
      header: "status",
      cell: (p) => {
        return (
          <StatusSelector getValue={p.getValue()} orderId={p.row.original.id} />
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
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
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
    </div>
  );
}

export default OrderTable;
