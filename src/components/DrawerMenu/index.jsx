import React, { useState } from "react";
import styles from "./DrawerMenu.module.css";

export default function Cart({ ToggleContent, children }) {
  const [showNav, setShowNav] = useState(false);

  const toggleMenu = () =>
    showNav ? `${styles.drawerMenu} ${styles.active}` : styles.drawerMenu;

  return (
    <>
      <button className={styles.button} onClick={() => setShowNav(!showNav)}>
        {ToggleContent()}
      </button>
      <nav className={toggleMenu()}>{children}</nav>
    </>
  );
}
