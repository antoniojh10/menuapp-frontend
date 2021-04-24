import React from "react";
import Link from "next/link";
import LoginContainer from "../../containers/LoginContainer";
import Input from "../../components/Input";

export default function SignupPage() {
  return (
    <LoginContainer>
      <h1>Bienvenido</h1>
      <form>
        <Input name="username" label="Correo o Nombre de Usuario" />

        <Input name="password" label="Contraseña" />

        <button type="submit">Iniciar sesión</button>
      </form>
      <span>
        ¿Se te olvidó tu contraseña?{" "}
        <Link href="/signin">
          <a>Reiníciala</a>
        </Link>
      </span>
      <span>
        ¿No tienes cuenta?{" "}
        <Link href="/signup">
          <a>Regístrate</a>
        </Link>
      </span>
    </LoginContainer>
  );
}
