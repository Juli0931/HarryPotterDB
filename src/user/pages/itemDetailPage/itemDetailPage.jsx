import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../auth/components/Button/Button";

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

  return (
    <div className="item-details">
      <h2>{attributes.title}</h2>
      <img
        src={type === "book" ? attributes.cover : attributes.poster}
        alt={attributes.title}
      />
      {type === "book" && (
        <div>
          <p>
            <strong>Title:</strong> {attributes.title}
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
          <p>
            <strong>Chapters:</strong>
            <ul>
              {attributes.relationships?.chapters?.data.map(
                (chapter, index) => (
                  <li key={index}>{chapter.id}</li>
                )
              )}
            </ul>
          </p>
          <a href={attributes.wiki} target="_blank" rel="noopener noreferrer">
            Visit the fan Wiki here!
          </a>
        </div>
      )}
      {type === "movie" && (
        <div>
          <p>
            <strong>Directors:</strong> {attributes.directors.join(", ")}
          </p>
          <p>
            <strong>Running Time:</strong> {attributes.running_time}
          </p>
          <p>
            <strong>Release Date:</strong> {attributes.release_date}
          </p>
          <p>
            <strong>Summary:</strong> {attributes.summary}
          </p>
          <a href={attributes.wiki} target="_blank" rel="noopener noreferrer">
            More Info
          </a>
        </div>
      )}
      <Button
        labelText="Go back"
        type="button"
        onClick={handleOnClick}
      ></Button>
    </div>
  );
}