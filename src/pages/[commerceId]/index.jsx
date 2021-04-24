import React from "react";
import Header from "../../components/Header";
import ProductItem from "../../components/ProductItem";
import styles from "./CommercePage.module.css";

const PRODUCTS = [
  {
    id: 1,
    name: "Pollo frito",
    description:
      "Lorem ipsum Choices.js is a lightweight, configurable select box/text input plugin.",
    price: 10,
  },
  {
    id: 2,
    name: "Pollo frito",
    description:
      "Lorem ipsum Choices.js is a lightweight, configurable select box/text input plugin.",
    price: 10,
  },
  {
    id: 3,
    name: "Pollo frito",
    description:
      "Lorem ipsum Choices.js is a lightweight, configurable select box/text input plugin.",
    price: 10,
  },
  {
    id: 4,
    name: "Pollo frito",
    description:
      "Lorem ipsum Choices.js is a lightweight, configurable select box/text input plugin.",
    price: 10,
  },
];

function CommercePage({ commerceData, error }) {
  if (error) {
    return <div>Ha ocurrido un error: {error.message}</div>;
  }
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.commerceHeader}>
          <div className={styles.container}>
            {commerceData.image ? (
              <img src={commerceData.image} alt={commerceData.name} />
            ) : (
              <img
                src="../../assets/placeholder-food.png"
                alt={commerceData.name}
              />
            )}
            <h1>{commerceData.name}</h1>
            <p>{commerceData.description}</p>
          </div>
        </div>
        <div className={styles.commerceBody}>
          <div className={styles.container}>
            {PRODUCTS.map((product, index) => (
              <ProductItem
                {...product}
                key={`${commerceData.id}-${index}`}
                id={`${commerceData.id}-${index}`}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

CommercePage.getInitialProps = async (ctx) => {
  try {
    const { commerceId } = ctx.query;

    const commerceData = {
      id: commerceId,
      name: commerceId.toUpperCase(),
      description:
        "Lorem ipsum Choices.js is a lightweight, configurable select box/text input plugin.",
    };

    return { commerceData };
  } catch (error) {
    return { error };
  }
};

export default CommercePage;
