import React from "react";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import DrawerMenu from "../DrawerMenu";
import CartItem from "../CartItem";
import styles from "./Cart.module.css";

export default function Cart() {
  const { commerce, cart, oneMore, oneLess } = useCart();

  const totalPrice = () => {
    return cart.reduce((a, b) => a + b.price * b.quantity, 0);
  };

  const encodeOrder = () => {
    let messageStart = `Hola **${commerce.name}**, quiero pedir:`;
    let order = cart.map(
      (product) =>
        `${product.quantity} ${product.name}: $${product.price}x${
          product.quantity
        }=${product.price * product.quantity}`
    );
    order = [messageStart, ...order, `Total: $${totalPrice()}`];
    console.log(order);
    console.log(order.join("\n"));
    console.log(encodeURIComponent(order.join("\n")));
    return encodeURIComponent(order.join("\n"));
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
      <a
        href={`https://wa.me/${commerce.telephone}/?text=${encodeOrder()}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <button
        onClick={() => {
          encodeOrder();
        }}
      > */}
        <FaWhatsapp /> Enviar pedido
        {/* </button> */}
      </a>
    </DrawerMenu>
  );
}
