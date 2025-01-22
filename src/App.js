import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
