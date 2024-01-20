import React from "react";
import Usercart from "../../components/Usercart";

import { CartStore } from "../../store";

const Cart = () => {
  const { cart, removeFromcart } = CartStore();

  const handleRemoveFromCart = (productId) => removeFromcart(productId);

  return (
    <div className="m-16 p-12">
      <Usercart cart={[...cart]} onRemove={handleRemoveFromCart} />
    </div>
  );
};

export default Cart;
