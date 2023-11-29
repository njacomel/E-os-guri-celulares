// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/produtos" component={ProductList} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div>
      <h2>Página Inicial</h2>
    </div>
  );
}

function Products() {
  return (
    <div>
      <h2>Página de Produtos</h2>
    </div>
  );
}

function App() {
  // Exemplo de uso do useState para um contador
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Minha Loja de Celulares</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Produtos</Link>
              </li>
            </ul>
          </nav>
          <p>Contador: {count}</p>
          <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
      </div>
    </Router>
  );
}

export default App;