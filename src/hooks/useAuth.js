import { useState, useContext, createContext } from "react";
import { useRouter } from "next/router";
import { login, register } from "../lib/api";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useAuthProvider() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState(null);
  const router = useRouter();

  const signin = async (email, password) => {
    const { user, jwt, error } = await login(email, password);
    if (error) {
      setErrors(error);
    } else {
      setErrors(null);
      setToken(jwt);
      setUser({ ...user });
      router.push("/");
    }
  };
  const signup = async ({ firstName, lastName, email, username, password }) => {
    const { user, jwt, error } = await register(
      firstName,
      lastName,
      email,
      username,
      password
    );
    if (error) {
      setErrors(error);
    } else {
      setErrors(null);
      setToken(jwt);
      setUser({ ...user });
      router.push("/");
    }
  };
  const signout = () => {
    setUser(null);
    setToken(null);
  };
  const sendPasswordResetEmail = (email) => {
    // TODO Create a reset password function
  };
  const confirmPasswordReset = (code, password) => {
    // TODO Create a confirm reset password function
  };

  return {
    token,
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    errors,
  };
}
