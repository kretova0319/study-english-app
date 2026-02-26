import React from "react";
import Filter from "./Filter";

export default function AllCategories() {
  return (
    <div className="wrapper__filter">
      {["nature", "animals", "emotions", "all"].map((category) => {
        return <Filter key={category} category={category} />;
      })}
    </div>
  );
}
