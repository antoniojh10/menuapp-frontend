import React from "react";
import Link from "next/link";
import LoginContainer from "../../containers/LoginContainer";
import Input from "../../components/Input";

export default function SignupPage() {
  return (
    <LoginContainer>
      <h1>Regístrate</h1>
      <form>
        <Input name="firstname" label="Nombres" />
        <Input name="lastname" label="Apellidos" />
        <Input name="email" label="Correo" />
        <Input name="username" label="Nombre de usuario" />
        <Input name="password" label="Contraseña" />
        <Input name="passwordConfirm" label="Confirmar contraseña" />

        <button type="submit">Regístrate</button>
      </form>
      <span>
        ¿Ya tienes cuenta?{" "}
        <Link href="/signin">
          <a>Inicia sesión</a>
        </Link>
      </span>
    </LoginContainer>
  );
}
