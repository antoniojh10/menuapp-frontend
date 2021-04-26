import React, { useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import ProductItem from "../../components/ProductItem";
import styles from "./CommercePage.module.css";

import { getOneCommerce } from "../../lib/api";

function CommercePage({ commerceData, error }) {
  const { setActualCommerce, addToCart } = useCart();

  useEffect(() => {
    setActualCommerce({ ...commerceData });
  }, [commerceData]);

  if (error) {
    console.log(error);
    return (
      <div>
        Ha ocurrido un error: <div>{error.message}</div>
      </div>
    );
  }
  return (
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
          {commerceData.products.map((elem, index) => {
            const product = { ...elem, id: `${commerceData.id}-${index}` };
            return (
              <ProductItem
                key={product.id}
                {...product}
                onAddCart={() => addToCart(product)}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

CommercePage.getInitialProps = async (ctx) => {
  try {
    const { commerceId } = ctx.query;
    const response = await getOneCommerce(commerceId);

    console.log(response);

    const commerceData = { ...response };

    return { commerceData };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export default CommercePage;
