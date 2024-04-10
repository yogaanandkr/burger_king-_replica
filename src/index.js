import React, { Fragment, StrictMode } from "react";
// import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Bk_nav from "./components/nav/Bk_nav";
import Poster from "./components/poster/Poster";
import Bkcards from "./components/cards/Bkcards";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Bk_nav></Bk_nav>
    <Poster></Poster>
    <Bkcards> </Bkcards>
    <Download></Download>
    <Footer></Footer>
    <Menu></Menu>
  </>
);
