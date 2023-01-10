import React from "react";
const Counter = ({ count, handleDecrement, handleIncrement }) => {
  return (
    <div style={{ padding: "5rem" }}>
      <button onClick={handleDecrement}>--</button>
      {count}
      <button onClick={handleIncrement}>++</button>
    </div>
  );
};

export default Counter;
