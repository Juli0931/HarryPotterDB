import { AuthContext } from "./AuthContext";

export function AuthContextProvider({ children }) {
  const contextValue = {};

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}