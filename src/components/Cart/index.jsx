import React, { useState } from "react";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import DrawerMenu from "../DrawerMenu";
import CartItem from "../CartItem";
import styles from "./Cart.module.css";

export default function Cart() {
  const { cart, oneMore, oneLess } = useCart();

  const totalPrice = () => {
    return cart.reduce((a, b) => a + b.price * b.quantity, 0);
  };

  return (
    <DrawerMenu ToggleContent={() => <FaShoppingCart />}>
      <h2>Tu pedido</h2>
      <ul className={styles.cartList}>
        {cart.map((product) => (
          <CartItem
            key={product.id}
            {...product}
            onMore={() => oneMore(product.id)}
            onLess={() => oneLess(product.id, product.quantity)}
          />
        ))}
      </ul>
      <h4 className={styles.totalPrice}>Costo total: ${totalPrice()}</h4>
      <button>
        <FaWhatsapp /> Enviar pedido
      </button>
    </DrawerMenu>
  );
}
