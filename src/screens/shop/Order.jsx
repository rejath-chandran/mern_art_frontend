import React from "react";
import { GetUserOrders } from "../../services/AdminQry";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Order = () => {
  const OrderSteps = (status) => {
    if (status === "placed") {
      return 0;
    } else if (status === "processing") {
      return 1;
    } else if (status === "shipped") {
      return 2;
    } else return 4;
  };
  const { data, isLoading } = GetUserOrders();
  console.log(data);
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl pt-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6">
          <h2 className="sr-only">Products purchased</h2>
          {isLoading ? (
            <>loadin...</>
          ) : (
            <div className="space-y-8">
              {data.map((product) => (
                <div
                  key={product._id}
                  className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
                >
                  <div className="px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                    <div className="sm:flex lg:col-span-7">
                      <div className="aspect-h-1 aspect-w-1 w-full flex-shrink-0 overflow-hidden rounded-lg sm:aspect-none sm:h-40 sm:w-40">
                        <img
                          src={product.product.image}
                          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                        />
                      </div>

                      <div className="mt-6 sm:ml-6 sm:mt-0">
                        <h3 className="text-base font-medium text-gray-900">
                          <a>{product.product.name}</a>
                        </h3>
                        <p className="mt-2 text-sm font-medium text-gray-900">
                          ${product.product.price}
                        </p>
                        <p className="mt-3 text-sm text-gray-500">
                          {product.product.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 lg:col-span-5 lg:mt-0">
                      <dl className="grid grid-cols-2 gap-x-6 text-sm">
                        <div>
                          <dt className="font-medium text-gray-900">
                            Delivery address
                          </dt>
                          <dd className="mt-3 text-gray-500">
                            <span className="block">{product.adress}</span>
                          </dd>
                        </div>
                        <div>
                          <dt className="font-medium text-gray-900">Rating</dt>
                          <dd className="mt-3 space-y-3 text-gray-500">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Give Reviews
                            </button>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  {4 != OrderSteps(product.status) ? (
                    <>
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6 lg:p-8">
                        <h4 className="sr-only">Status</h4>
                        <p className="text-sm font-medium text-gray-900">
                          {product.status} on{" "}
                          <time dateTime={product.datetime}>
                            {product.date}
                          </time>
                        </p>
                        <div className="mt-6" aria-hidden="true">
                          <div className="overflow-hidden rounded-full bg-gray-200">
                            <div
                              className="h-2 rounded-full bg-indigo-600"
                              style={{
                                width: `calc((${OrderSteps(product.status)} * 2 + 1) / 8 * 100%)`,
                              }}
                            />
                          </div>
                          <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
                            <div className="text-indigo-600">Order placed</div>
                            <div
                              className={classNames(
                                product.step > 0 ? "text-indigo-600" : "",
                                "text-center",
                              )}
                            >
                              Processing
                            </div>
                            <div
                              className={classNames(
                                product.step > 1 ? "text-indigo-600" : "",
                                "text-center",
                              )}
                            >
                              Shipped
                            </div>
                            <div
                              className={classNames(
                                product.step > 2 ? "text-indigo-600" : "",
                                "text-right",
                              )}
                            >
                              Delivered
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6 lg:p-8">
                      <h4 className="sr-only">Status</h4>
                      <p className="text-sm font-medium text-red-600">
                        Order Cancelled
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
