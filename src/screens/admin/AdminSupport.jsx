import { useQueryClient } from "@tanstack/react-query";
import DataTable from "../../components/DataTable";
import { AdminAllSupport, AdminDeleteSupport } from "../../services/AdminQry";
function AdminSupport() {
  const client = useQueryClient();
  const support = AdminAllSupport();
  const support_delete = AdminDeleteSupport(client);
  let columns = [
    {
      accessorKey: "_id",
      header: "ID",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "email",
      header: "email",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "messsage",
      header: "message",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "",
      header: "action",
      cell: (props) => (
        <>
          <button
            className="btn btn-error"
            onClick={() =>
              support_delete.mutate({ id: props.row.original._id })
            }
          >
            DELETE
          </button>
        </>
      ),
    },
  ];

  let data = [{}];
  return (
    <div className=" bg-white h-screen rounded-lg p-6 relative">
      <div className="bg-gray-800 rounded-md container text-white w-ful h-full w-[75vw] overflow-auto">
        {support.isFetched && (
          <DataTable data={support.data} columns={columns} />
        )}
      </div>
    </div>
  );
}

export default AdminSupport;
