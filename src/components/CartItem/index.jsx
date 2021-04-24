import React from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import styles from "./CartItem.module.css";

export default function CartItem({
  name,
  price,
  image,
  quantity,
  onMore,
  onLess,
}) {
  return (
    <li className={styles.cartItem}>
      {image ? (
        <img src={image} alt={name} />
      ) : (
        <img src="../../assets/placeholder-food.png" alt={name} />
      )}
      <div>
        <button onClick={onMore}>
          <FaPlusSquare size="1rem" />
        </button>
        <span>{quantity}</span>
        <button onClick={onLess}>
          <FaMinusSquare size="1rem" />
        </button>
      </div>
      <h3>{name}</h3>
      <span>${quantity * price}</span>
    </li>
  );
}
