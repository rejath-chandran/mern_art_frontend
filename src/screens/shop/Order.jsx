import React from "react";
import { GetUserOrders } from "../../services/AdminQry";
import OrderItem from "../../components/OrderItem";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Order = () => {
  const { data, isLoading } = GetUserOrders();

  return (
    <div className="bg-gray-50 w-full h-full overflow-auto">
      <div className="mx-auto max-w-2xl pt-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 ">
          <h2 className="text-2xl mb-8">Products purchased</h2>
          {isLoading ? (
            <>loadin...</>
          ) : (
            <div className="space-y-8">
              {data.map((product) => (
                <OrderItem product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
