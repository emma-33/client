import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="header">
      <img className="logo" src="../images/logo_full_black.png" alt="logo"></img>
      <Navbar />
      <SearchBar />
    </header>
  );
}

export default Header;
