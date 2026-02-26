import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import CardList from "./Components/CardList/CardList";
import Carusel from "./Components/Game/Carusel";
import Favorits from "./Components/Favorits/Favorits";
import SaveToLocalStorage from "./SaveToLocalStorage";
import { data } from "./data";
import Loader from "./Components/Loader/Loader";

function App() {
  // В words сохраняются все слова из LS при загрузке, и используются дальше отсюда
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <SaveToLocalStorage
        data={data}
        setWords={setWords}
        setLoading={setLoading}
      />
      <Header />
      <main className="wrapper__main">
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<CardList words={words} />} />
            <Route path="/cardlist" element={<CardList words={words} />} />
            <Route path="/game" element={<Carusel />} />
            <Route path="/favorites" element={<Favorits />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        )}
      </main>
    </Router>
  );
}

export default App;
