import OrderTable from "../../components/OrderTable";
import { GetAllSellerOrders } from "../../services/AdminQry";
const OrderShipped = () => {
    const { data, isLoading } = GetAllSellerOrders("shipped")
    return <div>{isLoading ? <>loading....</> : 
    <OrderTable data={data} />}</div>;
}

export default OrderShipped