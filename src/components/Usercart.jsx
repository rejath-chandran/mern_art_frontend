import { Link } from "react-router-dom";
import CartItem from "./CartItem";
const Usercart = ({ cart, onRemove, Checkout }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={onRemove}
              Checkout={Checkout}
            />
          ))}
          <div className="mt-8 flex justify-end m-6">
            <strong>
              Total: INR {cart.reduce((total, item) => total + item.price, 0)}
            </strong>
            {Checkout ? (
              <></>
            ) : (
              <>
                <Link
                  to={"/checkout"}
                  className="ml-12 hover:bg-slate-500 text-center bg-gray-600  text-gray-100 px-4 py-2 m-2 "
                >
                  Checkout
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Usercart;
