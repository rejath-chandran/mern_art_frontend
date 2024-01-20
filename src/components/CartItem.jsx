const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 p-4">
      <img
        src={item.image}
        className="w-[200px] h-[100px] object-cover mb-8 rounded-md"
      />
      <div>
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">{item.description}</p>
      </div>
      <div className="flex items-center">
        <span className="mr-4">₹{item.price}</span>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
