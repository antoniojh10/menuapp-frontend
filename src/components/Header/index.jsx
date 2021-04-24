import Link from "next/link";
import Cart from "../Cart";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>Ordenando</a>
        </Link>
        <Cart />
      </div>
    </header>
  );
}
