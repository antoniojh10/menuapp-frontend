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
  const [commerce, setCommerce] = useState([]);

  const setActualCommerce = (commerce) => {
    setCommerce({ ...commerce });
  };

  const addToCart = (product) => {
    const isInCart = cart.some((elem) => elem.id === product.id);
    if (!isInCart) {
      const newProduct = { ...product, quantity: 1 };
      setCart([...cart, newProduct]);
    }
  };
  const removeFromCart = (productId) => {
    const newCart = cart.filter((elem) => elem.id !== productId);
    setCart([...newCart]);
  };

  const oneMore = (productId) => {
    const newCart = cart.map((product) => {
      if (product.id === productId) product.quantity += 1;
      return product;
    });
    setCart([...newCart]);
  };

  const oneLess = (productId, quantity) => {
    if (quantity === 1) {
      removeFromCart(productId);
      return;
    }
    const newCart = cart.map((product) => {
      if (product.id === productId) product.quantity -= 1;
      return product;
    });
    setCart([...newCart]);
  };

  return {
    commerce,
    setActualCommerce,
    cart,
    addToCart,
    removeFromCart,
    oneMore,
    oneLess,
  };
}
