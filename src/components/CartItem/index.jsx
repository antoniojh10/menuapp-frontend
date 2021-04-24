import React from "react";
import styles from "./CartItem.module.css";

export default function CartItem({ name, price, image }) {
  return (
    <li className={styles.cartItem}>
      {image ? (
        <img src={image} alt={name} />
      ) : (
        <img src="../../assets/placeholder-food.png" alt={name} />
      )}
      <h3>{name}</h3>
      <span>${price}</span>
    </li>
  );
}
