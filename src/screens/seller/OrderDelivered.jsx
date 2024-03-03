import OrderTable from "../../components/OrderTable";
import { GetAllSellerOrders } from "../../services/AdminQry";
const OrderDelivered = () => {
  const { data, isLoading } = GetAllSellerOrders("delivered");
  return <div>{isLoading ? <>loading....</> : <OrderTable data={data} />}</div>;
};

export default OrderDelivered;
