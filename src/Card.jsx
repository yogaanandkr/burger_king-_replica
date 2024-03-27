import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";


function CardB(a) {
  // console.log(a);
  return (
    <>
      {/* {obj.map(a => ( */}
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img className="card_img" variant="top" src={a.img} />
        <Card.Body>
          <Card.Title>{a.name}</Card.Title>
          <hr />
          <Card.Text>{a.desc}</Card.Text>
          <Button variant="btn-light border-danger text-danger" className="btn btn-block">{a.price}</Button>
        </Card.Body>
      </Card>

      {/* ))} */}
    </>
  );
}

export default CardB;
