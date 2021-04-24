import React, { useState } from "react";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import CartItem from "../CartItem";
import styles from "./Cart.module.css";

export default function Cart() {
  const [showNav, setShowNav] = useState(false);
  const { cart, oneMore, oneLess } = useCart();

  const toggleMenu = () =>
    showNav ? `${styles.cart} ${styles.active}` : styles.cart;

  const totalPrice = () => {
    return cart.reduce((a, b) => a + b.price * b.quantity, 0);
  };

  return (
    <>
      <button className={styles.button} onClick={() => setShowNav(!showNav)}>
        <FaShoppingCart />
      </button>
      <nav className={toggleMenu()}>
        <h2>Tu pedido</h2>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              onMore={() => oneMore(product.id)}
              onLess={() => oneLess(product.id, product.quantity)}
            />
          ))}
        </ul>
        <h4>Costo total: ${totalPrice()}</h4>
        <button>
          <FaWhatsapp /> Enviar pedido
        </button>
      </nav>
    </>
  );
}
