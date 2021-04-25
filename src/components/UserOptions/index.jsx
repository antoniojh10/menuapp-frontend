import React from "react";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import DrawerMenu from "../DrawerMenu";
// import styles from "./Cart.module.css";

export default function UserOptions() {
  const { user, signout } = useAuth();

  return user ? (
    <DrawerMenu ToggleContent={() => <FaUserCircle />}>
      <ul>
        <li>
          <button onClick={() => signout()}>Cerrar Sesión</button>
        </li>
      </ul>
    </DrawerMenu>
  ) : (
    <Link href="/signin">
      <a>Iniciar sesión</a>
    </Link>
  );
}
