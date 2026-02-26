import "./card.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToFavorites } from "../../Redux/favoritesSlice";

export default function Card({ id, word, translation, }) {
  const [isChecked, setIsChecked] = useState(false); // Состояние переворота карточки
  const [isFavorite, setIsFavorite] = useState(false);

  // функция переворота карточки
  const toggleCard = () => {
    setIsChecked(!isChecked);
  };

  // функция пометки карточки, что она стала избранной
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const dispatch = useDispatch();

  // функция отправки карточки в избранное
  const handleAddToFavorites = () => {
    dispatch(addItemToFavorites({ id, word, translation }));
  };

  return (
    <div className={`card ${isChecked ? "blue" : "grey"}`} onClick={toggleCard}>
      <p className="word">{isChecked ? translation : word}</p>
      <span className="check"> Check </span>
      <button
        className={`star ${isFavorite ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite();
          handleAddToFavorites();
        }}
      >
        ★
      </button>
    </div>
  );
}



