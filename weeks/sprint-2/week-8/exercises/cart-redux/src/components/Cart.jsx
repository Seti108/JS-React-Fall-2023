import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../reducers/cartSlice";

const Cart = () => {
  // dispatch your removeItem action in your ProducList component
  const dispatch = useDispatch();
  // populate your cartItems object from the global state
  const showItems = useSelector((store) => store.cart.cartItems);
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <section>
        {showItems.map((item) => (
          <>
            <div key={item.id}>
              <p> {item.name} </p>
              <p>price: {item.price}</p>
              <button onClick={() => handleRemove(item.id)}>Rmove item</button>
            </div>
          </>
        ))}
      </section>
    </div>
  );
};

export default Cart;
