import React from "react";
import CardItem from "../CardItem";

export default function Card({
  items,
  total,
  onCounterUp,
  onCounterDown,
  onDelet,
}) {
  return (
    <div className="card">
      <p className="total">total - {total}</p>
      {items.map((elm, i) => {
        return (
          <CardItem
            key={i}
            item={elm}
            onCounterUp={onCounterUp}
            onCounterDown={onCounterDown}
            onDelet={onDelet}
          />
        );
      })}
    </div>
  );
}
