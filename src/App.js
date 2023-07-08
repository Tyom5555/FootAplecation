import Header from './Components/Header';
import ProductList from './Components/ProductList';
import Card from './components/card';
import './App.css';

function App() {
  return (
    
    <div className='App'>
      <Header/>
      <main>
      <ProductList/>
      <Card/>
      </main>
    </div>
  );
}

export default App;
