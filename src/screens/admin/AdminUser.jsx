import DataTable from "../../components/DataTable";
import { AllApplicationUsers } from "../../services/AdminQry";
function AdminUser() {
  const users=AllApplicationUsers()
  let columns = [
    {
      accessorKey: "_id",
      header: "ID",
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "name",
      header: "name",
      cell: (props) => (
        <p>
          {props.getValue()}
        </p>
      ),
    },
    {
      accessorKey: "image",
      header: "image",
      cell: (props) => (
        <div className="avatar">
  <div className="w-24 rounded">
    <img src={props.getValue()==""?'https://www.svgrepo.com/show/170303/avatar.svg':props.getValue()} />
  </div>
</div>
      ),
    },
    {
      accessorKey: "email",
      header: "email",
      cell: (props) => (
        <p>
          {props.getValue()}
        </p>
      ),
    },
    {
      accessorKey: "balance",
      header: "wallet",
      cell: (props) => (
        <p>
         ₹ {props.getValue()}
        </p>
      ),
    },
    {
      accessorKey: "role",
      header: "role",
      cell: (props) => (
        <p>
          {
          (props.getValue()=='user')?<>Customer</>:
          (props.getValue()=='seller')?<>Customer&Seller</>:
          <>Admin</>

          }
        </p>
      ),
    },
    {
      accessorKey: "orders",
      header: "Total purchase",
      cell: (props) => (
        <p>
          {props.getValue().length}
        </p>
      ),
    },
  ];

  let data = [{}];
  return (
    <div className=" bg-white h-screen rounded-lg p-6 relative">
      <div className="bg-gray-800 rounded-md container text-white w-ful h-full w-[75vw] overflow-auto">
        {
          users.isFetched&&<DataTable data={users.data} columns={columns} />
        }
      </div>
      
    </div>
  )
}

export default AdminUser