import React from "react";
import { useSelector } from "react-redux";
import { getFavoritesItems } from "../../Redux/favoritesSlice";
import "./favorites.css";

export default function FavoritesCounter() {
  const favoritesNumber = useSelector(getFavoritesItems);
  const count = favoritesNumber.length;

  // чтобы не показывать число 0 в избранном
  if (count === 0) return "";

  return (
    <div className="favorites-wrap">
      <span className="favorites-icon">★ </span>
      <span className="favorites-badge">{count}</span>
    </div>
  );
}
