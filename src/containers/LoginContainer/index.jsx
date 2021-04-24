import React from "react";
import Link from "next/link";
import styles from "./Login.module.css";

export default function LoginContainer({ children }) {
  return (
    <main className={styles.container}>
      <Link href="/">
        <a className={styles.backlink}>←Volver</a>
      </Link>
      <div className={styles.formContainer}>{children}</div>
    </main>
  );
}
