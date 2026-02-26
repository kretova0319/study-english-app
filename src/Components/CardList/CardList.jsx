import React from "react";
import Card from "./Card";
import "./card.css";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../Redux/wordsSlice";
import AllCategories from "../Filter/AllCategories";

export default function CardList({ words }) {
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <>
      <h1>Let's start learning. Choose the category.</h1>
      <AllCategories />

      <div className="wrapper__tile">
        {words
          .filter((word) => {
            if (selectedCategory === "all") return true;
            return selectedCategory === word.theme;
          })
          .map((word) => (
            <Card
              key={word.id}
              id={word.id}
              word={word.word}
              translation={word.translation}
            />
          ))}
      </div>
    </>
  );
}
