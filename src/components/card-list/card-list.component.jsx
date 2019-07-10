import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card key={monster._id}>
          <h1>{monster.name}</h1>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
