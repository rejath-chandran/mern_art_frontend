import OrderTable from "../../components/OrderTable";
import { GetAllSellerOrders } from "../../services/AdminQry";

const OrderProcess = () => {
  const { data, isLoading } = GetAllSellerOrders("processing");
  return <div>{isLoading ? <>loading....</> : <OrderTable data={data} />}</div>;
};

export default OrderProcess;
