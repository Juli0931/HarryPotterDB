import { useCallback, useContext, useEffect } from "react";
import { fetchData } from "../services/fetchData.js";
import { UserContext } from "../context/UserContext.js";

export function useFilter() {
  const context = useContext(UserContext);

  const { endpoint, setEndpoint, query, setQuery, results, setResults } =
    context;

  if (!context) {
    throw new Error(
      "This component sould be within a UserContextProvider Component"
    );
  }

  useEffect(() => {
    if (endpoint || query) {
      handleFetchAndState();
    } else {
      setResults([]);
    }
  }, [endpoint, query]);

  const handleFetchAndState = useCallback(async () => {
    try {
      const responseData = await fetchData(endpoint, query);
      const filteredData = responseData.data.filter((item) =>
        item.attributes.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredData);
      console.log(results);
    } catch (error) {
      console.error(`Error al obtener datos: ${error.message}`);
    }
  }, [endpoint, query]);

  const handleSelectChange = useCallback(
    (e) => {
      const selectedValue = e.target.value;
      setEndpoint(selectedValue);
      setQuery("");
    },
    [setEndpoint, setQuery]
  );

  const handleQueryChange = useCallback(
    (e) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  return {
    endpoint,
    setEndpoint,
    query,
    setQuery,
    results,
    setResults,
    handleSelectChange,
    handleQueryChange,
  };
}
