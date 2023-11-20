import { useNavigate } from "react-router-dom";
import "./Card.css";

export function Card({ title, cover, itemData }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log("Wooo, click!");
    navigate("/detail", { state: { item: itemData } });
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={cover} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
