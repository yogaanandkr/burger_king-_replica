import React, { Fragment, StrictMode } from "react";
// import React from "react";
import ReactDOM from "react-dom/client";
import { App, App1, Send, Table } from "./App";
import Git from "./Git";
import CardB from "./Card";
import { Cls } from "./Cls";
import "./style.css";
import data_promise from "./Get_arr";
import Bk_nav from "./Bk_nav";
import Poster from "./Poster";
import Bkcards from "./Bkcards";
import Download from "./Download";
import Footer from "./Footer";
import Menu from "./Menu";
import Hooks from "./Hooks";
let obj = [
  {
    name: "Anand",
    age: 22,
    skills: ["html", "css", "js", "python"],
  },
  {
    name: "Vaibhavi",
    age: 23,
    skills: ["html", "css", "js", "java"],
  },
  {
    name: "Sush",
    age: 21,
    skills: ["html", "css", "js", "python", "java"],
  },
];

let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render([
//   <StrictMode>
//     <h1>hello</h1>
//     <p>welcome to react </p>
//   </StrictMode>,

//   <Fragment>
//     <h1>hello1</h1>
//     <p>welcome to react again </p>
//   </Fragment>,

//   <>
//     <h1>hello2</h1>
//     <p>Thank You </p>
//   </>,

//   // <>
//   //   <App></App>
//   //   <App1></App1>
//   // </>,

//   <>
//     <Send></Send>
//   </>,
// ]);

let arr = ["shirts", "pants", "Shoes"];
// let ans = [];
// arr.forEach(a => {
//   ans.push(React.createElement("li", {}, `${a}`));
// });
// console.log(ans);

// let ol = React.createElement("ol", {}, ans);
root.render(
  <>
    <ol>
      {arr.map(a => {
        return <li>{a}</li>;
      })}
    </ol>
  </>
);

root.render(
  <center>
    <Table></Table>
  </center>
);

root.render(
  <>
    <Table></Table>
  </>
);
let objs = [
  {
    name: "Briyani",
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    price: "$500",
    img: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Burger",
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    price: "$400",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fHww",
  },
  {
    name: "Shawarma",
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    price: "$350",
    img: "https://images.unsplash.com/photo-1644615988562-31d2e98fb6b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoYXdhcm1hfGVufDB8fDB8fHww",
  },
  {
    name: "Shawarma",
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    price: "$350",
    img: "https://images.unsplash.com/photo-1644615988562-31d2e98fb6b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoYXdhcm1hfGVufDB8fDB8fHww",
  },
  {
    name: "Shawarma",
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    price: "$350",
    img: "https://images.unsplash.com/photo-1644615988562-31d2e98fb6b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoYXdhcm1hfGVufDB8fDB8fHww",
  },
];

root.render(
  <div className="cards">
    {objs.map(a => {
      console.log();
      return (
        <CardB name={a.name} desc={a.desc} price={a.price} img={a.img}></CardB>
      );
    })}
  </div>
);

// data_promise.then((dataa) => {
//   console.log(typeof dataa)
//   root.render(
//     <div className="cards">
//       <Git data={dataa}></Git>
//     </div>
//   )
// })

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

// root.render(
//   <>
//     <Hooks></Hooks>
//   </>
// );
