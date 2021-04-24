import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import LoginContainer from "../../containers/LoginContainer";

const errorsMessages = {
  required: "Este campo es requerido",
};

export default function SignupPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (values) => console.log(values);
  return (
    <LoginContainer>
      <h1>Bienvenido</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Correo
          <input
            type="email"
            {...register("email", {
              required: errorsMessages.required,
            })}
          />
          {errors.email && <div>{errors.email.message}</div>}
        </label>

        <label>
          Contraseña
          <input
            {...register("password", {
              required: errorsMessages.required,
            })}
          />
          {errors.password && <div>{errors.password.message}</div>}
        </label>

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
