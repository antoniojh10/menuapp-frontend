import React from "react";
import LoginContainer from "../../../containers/LoginContainer";
import Input from "../../../components/Input";

export default function CreateCommerce() {
  return (
    <LoginContainer>
      <h1>Nuevo Negocio</h1>
      <form>
        <Input name="commerceId" label="Nombre de usuario" />
        <Input name="name" label="Nombre de la tienda" />
        <Input name="description" label="Descripción" />

        <button type="submit">Crear negocio</button>
      </form>
    </LoginContainer>
  );
}
