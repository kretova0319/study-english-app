import React from "react";
import "./filter.css";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../Redux/wordsSlice";

export default function Filter({ category }) {
  // передаем в этот компонент в const selectedCategory
  // первоначальное состояние, сохраненное в getSelectedCategory
  const selectedCategory = useSelector(getSelectedCategory);

  // используем dispatch в этом компоненте - т.к. в этом компоненте 
  // будем нажимать на кнопку и передавать действие filterCategory,
  // созданное над состоянием в wordSlice
  //  
  const dispatch = useDispatch();

  return (
    <div>
      <p
        onClick={() => {
          dispatch(filterCategory(category));
        }}
        className={
          selectedCategory === category
            ? "categoryButtonSelected categoryButton"
            : "categoryButton"
        }
      >
        {category}
      </p>
    </div>
  );
}
