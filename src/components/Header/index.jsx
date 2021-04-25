import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";
import Cart from "../Cart";
import UserOptions from "../UserOptions";
import styles from "./Header.module.css";

const HIDE_CART_ROUTES = ["/", "/signin", "/signup"];

export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>Ordenando</a>
        </Link>
        <span>
          <UserOptions />
          {!HIDE_CART_ROUTES.includes(router.pathname) && <Cart />}
        </span>
      </div>
    </header>
  );
}
