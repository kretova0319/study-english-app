import React from "react";
import "./favorites.css";
import { removeItemFromFavorites } from "../../Redux/favoritesSlice";
import { useDispatch } from "react-redux";

export default function FavoritesItem({ favoritesItem }) {
  const dispatch = useDispatch();

  return (
    <div className="favorites__row">
      <span className="favorites__english">{favoritesItem.word}</span>
      <span className="favorites__russian">{favoritesItem.translation}</span>
      <button
        onClick={() =>
          dispatch(
            removeItemFromFavorites({ favoritesItemId: favoritesItem.id }),
          )
        }
        className="favorites__remove"
      >
        ✕
      </button>
    </div>
  );
}
