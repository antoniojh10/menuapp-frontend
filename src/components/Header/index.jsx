import Link from "next/link";
import { useRouter } from "next/router";
import Cart from "../Cart";
import styles from "./Header.module.css";

const HIDE_CART_ROUTES = ["/", "/signin", "signup"];

export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>Ordenando</a>
        </Link>
        {!HIDE_CART_ROUTES.includes(router.pathname) && <Cart />}
      </div>
    </header>
  );
}
