// Priya, Filza, Sebastian
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { store } from "./store";

export const App = () => {
  return (
    // wrap the app within a <Provider>
    <Provider store={store}>
      <div>
        <h1>Render your cart here</h1>
        <Cart />
        <ProductList />
      </div>
    </Provider>
  );
};
