import Cart from "../Cart";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Ordenando</h1>
        <Cart />
      </div>
    </header>
  );
}
