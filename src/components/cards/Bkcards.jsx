import "./bkcards.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./bkcards.css";

let cards = [
  {
    title: "The Fiery Buffalo BK® Ball game is on!",
    img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/3e6af47714a07c41021b1fbce783b99d89ebb2dd-2000x1000.png?w=650&q=80&fit=max&auto=format",
    desc: "oyal Perks members can slam a few dunks and win daily perks. Play now through 4/8.",
  },
  {
    title: "Feel the Heat with New Fiery Buffalo",
    img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/fa41aecf7e62f379553c32b215dcd0ac36e1ccab-1000x500.png?w=650&q=80&fit=max&auto=format",
    desc: "Wrap Packs are back and hotter than ever! Try the NEW Fiery Buffalo Royal Crispy Wrap in your favorite Wrap Pack: The Wrap Flow Trio, The Duo Wrap Combo, The King of Wrap and The Ultimate Wrap Party.",
  },
  {
    title: "Pick up this Po-dacious treat",
    img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/d6aae0315f9c3f697eca20a82252d8faf16b44b8-2000x1000.png?w=650&q=80&fit=max&auto=format",
    desc: "Kung Fu Panda is back and BK® is celebrating with Po's Panda Sundae—a kickin' combo of vanilla soft serve, chocolate syrup and OREO® Cookie Pieces.",
  },
  {
    title: "Buy 1 Big Fish, get 1 for $2",
    img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/236c1dd5e57dae652473a87e39de0fa38a61737e-1000x500.png?w=650&q=80&fit=max&auto=format",
    desc: "Buy a Big Fish Sandwich, made with crispy panko breading and topped with sweet tartar sauce. Get another for just $2.",
  },
  {
    title: "$3 OFF any $20+ BK® delivery order!",
    img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/03d28f28ec8f30ee65dd9dcb037e64e4e7983e49-2000x1000.png?w=650&q=80&fit=max&auto=format",
    desc: "Save time and money with $3 OFF any $20+ BK® delivery order. At part. U.S. rest. Fees and higher prices apply.",
  },
  {
    title: "Awesomeness is on the menu",
    img: "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/610f4d94e82b4669f7e208ad596a8ea92bb4e0e7-2000x1000.png?w=650&q=80&fit=max&auto=format",
    desc: "Skadoosh! Bring your little hero into BK® for a King Jr.™ Meal and get a Kung Fu Panda toy—one toy per King Jr.™ Meal while supplies last, of course.",
  },
];

function Bkcards(a) {
  // console.log(a);
  return (
    <div className="cards">
      <div className="content">
        {cards.map((a, index) => {
          return (
            <div className="card">
              <div className="img">
                <img src={a.img} alt="" />
              </div>
              <div className="title">
                <h3>{a.title}</h3>
              </div>
              <div className="desc">
                <p>{a.desc}</p>
              </div>
              <div className="button">
                <button className="btn btn-light btn-outline-danger">
                  {index == 0 ? "Play Now" : "Order Now"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bkcards;
