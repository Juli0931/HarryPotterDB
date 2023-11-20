import { AuthContext } from "./AuthContext";
import { useState } from "react";

export function AuthContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  const users = [
    {
      username: "Juliibc_",
      password: "123456",
    },
    {
      username: "Karolfc",
      password: "Contraseña",
    },
    {
      username: "Test",
      password: "123",
    },
  ];

  const contextValue = {
    isLogged,
    setIsLogged,
    users,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
