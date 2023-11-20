import { useLocation, useNavigate } from "react-router-dom";
import { NavBar } from "../../components";
import "./itemDetailPage.css";

export function ItemDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { state } = location;

  if (!state || !state.item) {
    return <div>No item selected</div>;
  }

  const { type, attributes } = state.item;

  const handleOnClick = () => {
    console.log("Go back");
    navigate("/dashboard");
  };

  const renderDetails = {
    book: () => (
      <div className="book-detail">
        <p className="detail-title">
          <strong>{attributes.title}</strong>
        </p>
        <p>
          <strong>Author:</strong> {attributes.author}
        </p>
        <p>
          <strong>Pages:</strong> {attributes.pages}
        </p>
        <p>
          <strong>Release Date:</strong> {attributes.release_date}
        </p>
        <p>
          <strong>Dedication:</strong> {attributes.dedication}
        </p>
        <p>
          <strong>Summary:</strong> {attributes.summary}
        </p>
        <a
          className="visit-link"
          href={attributes.wiki}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the fan Wiki here!
        </a>
      </div>
    ),
    movie: () => (
      <div className="movie-detail">
        <p className="detail-title">
          <strong>{attributes.title}</strong>
        </p>
        <p>
          <strong>Directors:</strong> {attributes.directors.join(", ")}
        </p>
        <p>
          <strong>Duration:</strong> {attributes.running_time}
        </p>
        <p>
          <strong>Release Date:</strong> {attributes.release_date}
        </p>
        <p>
          <strong>Summary:</strong> {attributes.summary}
        </p>
        <a
          className="visit-link"
          href={attributes.wiki}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the fan Wiki here!
        </a>
      </div>
    ),
  };

  return (
    <>
      <NavBar />
      <div className="item-details">
        <img
          src={type === "book" ? attributes.cover : attributes.poster}
          alt={attributes.title}
          className={type === "book" ? "bookImg" : "movieImg"}
        />
        <div>
          {renderDetails[type] ? renderDetails[type]() : null}
          <button onClick={handleOnClick}>❮ Go back</button>
        </div>
      </div>
    </>
  );
}
