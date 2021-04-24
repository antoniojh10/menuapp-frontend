import React from "react";
import { useState } from "react";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import CartItem from "../CartItem";
import styles from "./Cart.module.css";

const PRODUCTS = [
  {
    id: "cart-item-1",
    name: "Pollo a la brasa",
    price: 10,
    image: "../../assets/placeholder-food.png",
  },
  {
    id: "cart-item-2",
    name: "Pollo a la brasa",
    price: 10,
    image: "../../assets/placeholder-food.png",
  },
  {
    id: "cart-item-3",
    name: "Pollo a la brasa",
    price: 10,
    image: "../../assets/placeholder-food.png",
  },
  {
    id: "cart-item-4",
    name: "Pollo a la brasa",
    price: 10,
    image: "../../assets/placeholder-food.png",
  },
  {
    id: "cart-item-5",
    name: "Pollo a la brasa",
    price: 10,
    image: "../../assets/placeholder-food.png",
  },
  {
    id: "cart-item-6",
    name: "Pollo a la brasa",
    price: 10,
    image: "../../assets/placeholder-food.png",
  },
  {
    id: "cart-item-7",
    name: "Pollo a la brasa",
    price: 10,
    image: "../../assets/placeholder-food.png",
  },
  {
    id: "cart-item-8",
    name: "Pollo a la brasa",
    price: 10,
    image: "../../assets/placeholder-food.png",
  },
  {
    id: "cart-item-9",
    name: "Pollo a la brasa",
    price: 10,
    image: "../../assets/placeholder-food.png",
  },
];

export default function Cart() {
  const [showNav, setShowNav] = useState(false);

  const toggleMenu = () =>
    showNav ? `${styles.cart} ${styles.active}` : styles.cart;

  const totalPrice = () => {
    return PRODUCTS.reduce((a, b) => a + b.price, 0);
  };

  return (
    <>
      <button className={styles.button} onClick={() => setShowNav(!showNav)}>
        <FaShoppingCart />
      </button>
      <nav className={toggleMenu()}>
        <h2>Tu pedido</h2>
        <ul>
          {PRODUCTS.map((product) => (
            <CartItem key={product.id} {...product} />
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
