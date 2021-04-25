import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import LoginContainer from "../../containers/LoginContainer";

const errorsMessages = {
  required: "Este campo es requerido",
};

export default function SignupPage() {
  const { user, signup, errors: registerError } = useAuth();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (values) => {
    signup(values);
  };

  useEffect(() => {
    if (user) router.push("/");
  }, []);

  return (
    <LoginContainer>
      <h1>Regístrate</h1>
      {registerError && <div>{registerError}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nombres
          <input
            {...register("firstName", {
              required: errorsMessages.required,
            })}
          />
          {errors.firstName && <div>{errors.firstName.message}</div>}
        </label>
        <label>
          Apellidos
          <input
            {...register("lastName", {
              required: errorsMessages.required,
            })}
          />
          {errors.lastName && <div>{errors.lastName.message}</div>}
        </label>
        <label>
          Correo
          <input
            type="email"
            {...register("email", {
              required: errorsMessages.required,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Correo inválido",
              },
            })}
          />
          {errors?.email && <div>{errors.email.message}</div>}
        </label>
        <label>
          Nombre de usuario
          <input
            {...register("username", {
              required: errorsMessages.required,
            })}
          />
          {errors?.username && <div>{errors.username.message}</div>}
        </label>
        <label>
          Contraseña
          <input
            {...register("password", {
              required: errorsMessages.required,
              validate: {
                weakPassword: (value) =>
                  value.length >= 6 ||
                  "La contraseña debe tener al menos 6 caracteres",
              },
            })}
          />
          {errors?.password && <div>{errors.password.message}</div>}
        </label>
        <label>
          Confirmar contraseña
          <input
            {...register("passwordConfirm", {
              required: errorsMessages.required,
              validate: {
                passwordsMustBeEquals: (value) => {
                  const { password } = getValues();
                  return (
                    value === password || "Las contraseñas deben coincidir"
                  );
                },
              },
            })}
          />
          {errors?.passwordConfirm && (
            <div>{errors.passwordConfirm.message}</div>
          )}
        </label>

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
