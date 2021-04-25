import Link from "next/link";
import { useRouter } from "next/router";
import Cart from "../Cart";
import DrawerMenu from "../DrawerMenu";
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
        <DrawerMenu ToggleContent={() => "Menu"}>
          <h1>Yo soy un menu</h1>
        </DrawerMenu>
        {!HIDE_CART_ROUTES.includes(router.pathname) && <Cart />}
      </div>
    </header>
  );
}
