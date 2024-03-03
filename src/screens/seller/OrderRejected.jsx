import OrderTable from "../../components/OrderTable";
import { GetAllSellerOrders } from "../../services/AdminQry";
const OrderRejected = () => {
  const { data, isLoading } = GetAllSellerOrders("rejected");
  return <div>{isLoading ? <>loading....</> : <OrderTable data={data} />}</div>;
};

export default OrderRejected;
