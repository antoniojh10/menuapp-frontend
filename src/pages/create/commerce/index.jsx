import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import LoginContainer from "../../../containers/LoginContainer";
import { createCommerce } from "../../../lib/api";

const errorsMessages = {
  required: "Este campo es requerido",
};

export default function CreateCommerce() {
  const { token, user, errors: newCommerceError } = useAuth();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (values) => {
    const { data, error } = await createCommerce({
      ...values,
      userId: user.id,
      token,
    });
    console.log(data);
    if (error) console.log("Ha ocurrido un error");
    else router.push(`/${data.domainName}`);
  };

  return (
    <LoginContainer>
      <h1>Nuevo Negocio</h1>
      {newCommerceError && <div>{newCommerceError}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nombre
          <input
            {...register("name", {
              required: errorsMessages.required,
            })}
          />
          {errors.name && <div>{errors.name.message}</div>}
        </label>
        <label>
          Username del negocio
          <input
            {...register("domainName", {
              required: errorsMessages.required,
            })}
          />
          {errors.domainName && <div>{errors.domainName.message}</div>}
        </label>
        <label>
          Descripción
          <input
            type="description"
            {...register("description", {
              required: errorsMessages.required,
            })}
          />
          {errors.email && <div>{errors.email.message}</div>}
        </label>
        <label>
          Teléfono
          <input
            {...register("telephone", {
              required: errorsMessages.required,
            })}
          />
          {errors.telephone && <div>{errors.telephone.message}</div>}
        </label>

        <button type="submit">Crear perfil del Negocio</button>
      </form>
    </LoginContainer>
  );
}
