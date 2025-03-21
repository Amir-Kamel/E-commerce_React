import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "./store/slice/cartSlice";


const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const totalItems =useSelector (state => state.cart.totalItems)

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <h5>Your cart is empty.</h5>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                {item.title} - ${item.price} x {item.quantity}
              </div>
              <div>
                <button className="btn btn-sm btn-success" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                <button className="btn btn-sm btn-warning mx-2" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <button className="btn btn-sm btn-danger" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h4>Items:<strong> { totalItems } </strong></h4>
    </div>
  );
};

export default CartPage;