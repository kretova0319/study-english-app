import React from "react";
import "./carusel.css";

export default function CardWrapper({ children , showPreviousCard, showNextCard}) {
  return (
    <div className="wrapper__game">
      <button onClick={showPreviousCard} className="arrow left">➜</button>
      {children}
      <button onClick={showNextCard} className="arrow">➜</button>
    </div>
  );
}


