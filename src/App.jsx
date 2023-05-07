// import { useState } from "react";
import FirstNav from "./components/FirstNav/FirstNav";
import Footer from "./components/Footer/Footer";
import SecNav from "./components/SecNav/SecNav";
import CartContextProvider from "./context/CartContextProvider";
import AddToCart from "./pages/AddToCart/AddToCart";
function App() {
  return (
    <>
      <div className="app">
        <CartContextProvider>
          <FirstNav />
          <SecNav />
          <AddToCart />
        </CartContextProvider>
      </div>
    </>
  );
}

export default App;
