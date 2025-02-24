import React from "react";
import Avatar from "./Avatar";
import Paragraph from "./Paragraph";

const Cards = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Paragraph paraInfo={props.phone} />
          <Paragraph paraInfo={props.email} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
