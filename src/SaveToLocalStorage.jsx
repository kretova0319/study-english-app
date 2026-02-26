import React from "react";
import { useEffect } from "react";

export default function SaveToLocalStorage({ data, setWords, setLoading }) {
  useEffect(() => {
    const storedWords = localStorage.getItem("words");

    setTimeout(() => {
      if (storedWords) {
        setWords(JSON.parse(storedWords));
      } else {
        setWords(data);
        localStorage.setItem("words", JSON.stringify(data));
      }
      setLoading(false);
    }, 1000);
  }, [data, setWords, setLoading]);
}
