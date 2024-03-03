import OrderTable from "../../components/OrderTable";
import { GetAllSellerOrders } from "../../services/AdminQry";

const SellerOrder = () => {
  const { data, isLoading } = GetAllSellerOrders("placed");
  return <div>{isLoading ? <>loading....</> : 
  <OrderTable data={data} />}</div>;
};

export default SellerOrder;
