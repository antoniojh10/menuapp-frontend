import React from "react";
import styles from "./ProductItem.module.css";

export default function ProductItem({
  name,
  image,
  description,
  price,
  onAddCart,
}) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      {image ? (
        <img src={image} alt={name} />
      ) : (
        <img src="../../assets/placeholder-food.png" alt={name} />
      )}
      <p>{description}</p>
      <div className={styles.actions}>
        <span>${price}</span>
        <button onClick={onAddCart}>Agregar al carrito</button>
      </div>
    </div>
  );
}
