import { NavLink } from "react-router-dom";
import "./header.css";
import FavoritesItem from "../Components/Favorits/FavoritesCounter";

function Header() {
  return (
    <header className="container__header">
      <section className="wrapper__header">
        <NavLink end to="/cardlist">
          <img
            className="logo"
            src="https://www.svgrepo.com/show/345233/translate.svg"
            alt="логотип сайта"
          ></img>
        </NavLink>

        <div className="links">
          <NavLink
            end
            to="/cardlist"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Cardlist
          </NavLink>
          <NavLink
            end
            to="/game"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Game
          </NavLink>
          <NavLink
            end
            to="/favorites"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Favorites
          </NavLink>
          <NavLink
            end
            to="/favorites"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <FavoritesItem />
          </NavLink>
        </div>
      </section>
    </header>
  );
}

export default Header;
