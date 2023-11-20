import { UserContext } from "./UserContext";
import { useState } from "react";

export function UserContextProvider({ children }) {
  const [endpoint, setEndpoint] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const contextValue = {
    endpoint,
    setEndpoint,
    query,
    setQuery,
    results,
    setResults,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
