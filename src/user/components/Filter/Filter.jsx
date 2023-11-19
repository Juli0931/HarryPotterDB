import { useState, useEffect } from "react";
import "./Filter.css";
import { fetchData } from "../../services/fetchData.js";
import { FaSearch } from "react-icons/fa";
import { Card } from "../../components";

export function Filter() {
  const [endpoint, setEndpoint] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (endpoint || query) {
      handleFetchAndState();
    }
  }, [endpoint, query]);

  const handleFetchAndState = async () => {
    try {
      const responseData = await fetchData(endpoint, query);
      const filteredData = responseData.data.filter((item) => {
        return item.attributes.title.includes(query);
      });
      setResults(filteredData);
    } catch (error) {
      console.error(`Error al obtener datos: ${error.message}`);
    }
  };

  const handleSelectChange = (e) => {
    setEndpoint(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="filter-search">
      <select id="selectInput" value={endpoint} onChange={handleSelectChange}>
        <option value="">Select...</option>
        <option value="books">Books</option>
        <option value="movies">Movies</option>
      </select>

      <input
        type="text"
        id="query"
        value={query}
        onChange={handleQueryChange}
      />
      <div>
        <button className="search-Btn">
          <FaSearch size="20" />
        </button>
      </div>

      <div className="card-container">
        {results.map((item, index) => (
          <Card
            key={index}
            title={item.attributes.title}
            cover={
              endpoint === "books"
                ? item.attributes.cover
                : item.attributes.poster
            }
            itemData={item}
          />
        ))}
      </div>
    </div>
  );
}