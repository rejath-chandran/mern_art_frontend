
import DataTable from '../../components/DataTable';
function AdminSupport() {

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
    <img src={props.getValue()} />
  </div>
</div>
      ),
    },
    {
      accessorKey: "desc",
      header: "desc",
      cell: (props) => (
        <p>
          {props.getValue()}
        </p>
      ),
    },
    {
      accessorKey: "category",
      header: "category",
      cell: (props) => (
        <p>
          {props.getValue()}
        </p>
      ),
    },
    {
      accessorKey: "artist",
      header: "artist",
      cell: (props) => (
        <p>
          {props.getValue()}
        </p>
      ),
    },
    {
      accessorKey: "price",
      header: "price",
      cell: (props) => (
        <p>
          {props.getValue()}
        </p>
      ),
    },
  ];

  let data = [{}];
  return (
    <div className=" bg-white h-screen rounded-lg p-6 relative">
    <div className="bg-gray-800 rounded-md container text-white w-ful h-full w-[75vw] overflow-auto">
      {
      <DataTable data={data} columns={columns} />
      }
    </div>
    
  </div>
  )
}

export default AdminSupport