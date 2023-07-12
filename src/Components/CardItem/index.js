import React from "react";

export default function CardItem({
  item,
  onCounterUp,
  onCounterDown,
  onDelet,
}) {
  return (
    <div className="cardItem">
      <p className="title">{item.name}</p>
      <p>qanak {item.counter}</p>
      <p className="yndhanur">Arjeqy - {item.price * item.counter}</p>
      <button onClick={() => onCounterUp(item)}>+</button>
      <button onClick={() => onCounterDown(item)}>-</button>
      <button onClick={() => onDelet(item)} className="del-btn">
        Delete
      </button>
    </div>
  );
}
