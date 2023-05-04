/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const cartContext = createContext();

const CartContextProvider = (props) => {
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <cartContext.Provider value={[cartQuantity, setCartQuantity]}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
