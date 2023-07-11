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
    }else{
      product.counter++
    }
  };
  const filterProducts = (category) => {
    if (category === "All") {
      return DUMMYPRODUCTS;
    }
    return DUMMYPRODUCTS.filter((elm) => elm.category === category);
  };
  const products = useMemo(() => filterProducts(filterText), [filterText]);
  return (
    <div className="App">
      <Header onFilter={(text) => setfilterText(text)} />
      <main>
        <ProductList products={products} onMove={moveToCard} />
        <Card items={card} />
      </main>
    </div>
  );
}

export default App;
