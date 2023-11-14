import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../reducers/cartSlice";

const ProductList = () => {
  // dispatch your addItem action in your ProducList component
  const dispatch = useDispatch();
  const selectProduct = useSelector((store) => store.cart.products);
  const handleAddToCart = (index) => {
    dispatch(addItem(selectProduct[index]));
    console.log(selectProduct[index]);
  };

  // create a list of products to display
  const products = useSelector((store) => store.cart.products);

  return (
    <div>
      <h2>Product List</h2>
      <main>
        {/* create your product list mapping through `products`` */}
        {products.map((product, index) => (
          <div key={product.id}>
            <p>{product.name} </p>
            <p>{product.price} </p>
            <button onClick={() => handleAddToCart(index)}>Add to Cart</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ProductList;
