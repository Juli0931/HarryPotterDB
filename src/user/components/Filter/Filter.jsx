import { FaSearch } from "react-icons/fa";
import { Card } from "../../components";
import { useFilter } from "../../hooks/useFilter";
import { useEffect } from "react";
import "./Filter.css";

export function Filter() {
  const { endpoint, query, results, handleSelectChange, handleQueryChange } =
    useFilter();

  useEffect(() => {
    const cardsResultsDiv = document.getElementById("cards-results");
    if (cardsResultsDiv) {
      cardsResultsDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [results]);

  return (
    <>
      <div className="filter-search">
        <select
          className="selectInput"
          id="selectInput"
          value={endpoint}
          onChange={handleSelectChange}
        >
          <option className="option-select" value="">
            Select...
          </option>
          <option className="option-select" value="books">
            Books
          </option>
          <option className="option-select" value="movies">
            Movies
          </option>
        </select>

        <input
          type="text"
          id="query"
          value={query}
          onChange={handleQueryChange}
          disabled={!endpoint}
        />
        <div>
          <button className="search-Btn">
            <FaSearch size="20" />
          </button>
        </div>
      </div>

      <div className="cards-results" id="cards-results">
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
    </>
  );
}
