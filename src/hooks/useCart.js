import { useState, useContext, createContext } from "react";

const cartContext = createContext();

export function CartProvider({ children }) {
  const cart = useCartProvider();
  return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
}

export const useCart = () => {
  return useContext(cartContext);
};

function useCartProvider() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isInCart = cart.some((elem) => elem.id === product.id);
    if (!isInCart) setCart([...cart, product]);
  };
  const removeFromCart = (productId) => {
    const newCart = cart.filter((elem) => elem.id !== productId);
    setCart([...newCart]);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
  };
}
