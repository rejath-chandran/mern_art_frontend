import { GetUserWalletRequest } from "../../services/AdminQry";
import DataTable from "../../components/DataTable";
function SellerWalletTable() {
  const wallet = GetUserWalletRequest("process");
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
      accessorKey: "status",
      header: "STATUS",
      cell: (props) => <p>{props.getValue()}</p>,
    },
  ];
  return (
    <>
      {wallet.isLoading ? (
        <>loading..</>
      ) : (
        <>
          <DataTable columns={columns} data={wallet.data} />
        </>
      )}
    </>
  );
}

export default SellerWalletTable;
