import React from "react";
import Counter from "./components/counter";
import Product from "./components/Product";
import "./css/main.css";

function App() {
  const [count, setCount] = React.useState(5);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleAddToCart = (title) => {
    alert("This is an alert from " + title);
  };
  return (
    <div>
      <h1 className="example">Components Example</h1>
      <Counter
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <Product
        title="Audi"
        price="500"
        onAddToCart={handleAddToCart}
        count={count}
      />
      <Product
        title="Mercedes"
        price="600"
        onAddToCart={handleAddToCart}
        count={count}
      />
      <Product
        title="BMW"
        price="400"
        onAddToCart={handleAddToCart}
        count={count}
      />
    </div>
  );
}

export default App;
