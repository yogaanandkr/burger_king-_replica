import React, { Fragment, StrictMode } from "react";
// import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Bk_nav from "./Bk_nav";
import Poster from "./Poster";
import Bkcards from "./Bkcards";
import Download from "./Download";
import Footer from "./Footer";
import Menu from "./Menu";

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
