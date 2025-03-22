import React, { useContext } from "react";
import "./mainnav.css";
import { Link } from "react-router";
import { WatchListCtx } from "../store/watchListCtx";

function MainNav() {
  const { watchLists } = useContext(WatchListCtx);

  return (
    <header className="header">
      <Link to={"/"}>
        <button>All Movies</button>
      </Link>
      <Link to={"/watchlist"}>
        <button>WatchList ({watchLists.length})</button>
      </Link>
    </header>
  );
}

export default MainNav;
