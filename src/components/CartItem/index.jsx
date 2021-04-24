import React from "react";
import styles from "./CartItem.module.css";

export default function CartItem({ name, price, image }) {
  return (
    <li className={styles.cartItem}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <span>${price}</span>
    </li>
  );
}
