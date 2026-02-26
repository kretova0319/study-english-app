import React from "react";
import CardWrapper from "./CardWrapper";
import "./carusel.css";
import Card from "../CardList/Card";
import { useState, useEffect } from "react";
import { data } from "../../data";

export default function Carusel() {
  //указываем позицию 1 слова
  const [position, setPosition] = useState(28);
  const { id, word, translation } = data[position];

  const showPreviousCard = () => {
    if (position === 0) {
      setPosition(data.length - 1);
    } else setPosition(position - 1);
  };

  const showNextCard = () => {
    if (position === data.length - 1) {
      setPosition(0);
    } else setPosition(position + 1);
  };

  return (
    <div>
      <h2>Check yourself</h2>
      <CardWrapper
        showPreviousCard={showPreviousCard}
        showNextCard={showNextCard}
      >
        <Card key={id} id={id} word={word} translation={translation} />
      </CardWrapper>
      <div className="number">
        {position + 1}/{data.length}
      </div>
    </div>
  );
}

// если на 32 строке убрать key={id}, карточка, перевернутая на русский язык не будет 
// переворачиваться на английскую сторону при нажатии на стрелку, будет 
//  дальше идти на русском языке