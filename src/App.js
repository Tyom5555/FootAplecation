import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Card from "./Components/Card";
import "./App.css";
import { DUMMYPRODUCTS } from "./DummyPorducts";
import { useMemo, useState } from "react";

function App() {
  const [filterText, setfilterText] = useState("All");
  const [card, setCard] = useState([]);

  const moveToCard = (product) => {
    if (!card.includes(product)) {
      card.push(product);
      product.counter = 1;
    } else {
      product.counter++;
    }
    setCard([...card]);
  };
  const filterProducts = (category) => {
    if (category === "All") {
      return DUMMYPRODUCTS;
    }
    return DUMMYPRODUCTS.filter((elm) => elm.category === category);
  };
  const products = useMemo(() => filterProducts(filterText), [filterText]);

  const calculatorTotal = (card) => {
    return card.reduce(
      (counter, item) => counter + item.price * item.counter,
      0
    );
  };
  const total = useMemo(() => calculatorTotal(card), [card]);
  const counterUp = (product) => {
    product.counter++;
    setCard([...card]);
  };
  const counterDown = (product) => {
    product.counter--;
    if (product.counter === 0) {
      card.splice(card.indexOf(product), 1);
    }
    setCard([...card]);
  };
  const removeFromCard = (product) => {
    card.splice(card.indexOf(product), 1);
    setCard([...card]);
  };
  return (
    <div className="App">
      <Header onFilter={(text) => setfilterText(text)} />
      <main>
        <ProductList products={products} onMove={moveToCard} />
        <Card
          items={card}
          total={total}
          onCounterUp={counterUp}
          onCounterDown={counterDown}
          onDelet={removeFromCard}
        />
      </main>
    </div>
  );
}

export default App;
