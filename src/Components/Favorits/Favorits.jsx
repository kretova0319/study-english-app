import React from "react";
import FavoritesItem from "./FavoritesItem";
import { useSelector } from "react-redux";
import { getFavoritesItems } from "../../Redux/favoritesSlice";
import "./favorites.css";

export default function Favorits() {
  const favoritesItems = useSelector(getFavoritesItems);

  return (
    <>
      <h2>Just add words from the Cardlist</h2>
      <div className="favorites">
        <div className="favorites__list">
          {favoritesItems.map((favoritesItem) => (
            <FavoritesItem
              key={favoritesItem.id}
              favoritesItem={favoritesItem}
            />
          ))}
        </div>
      </div>
    </>
  );
}
