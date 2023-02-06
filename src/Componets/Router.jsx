import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Page/Home';
import Sobre from '../Componets/Sobre';
import Experiencias from '../Componets/Experiencias';
import Projetos from '../Componets/Projetos';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/experiencias">Experiências</Link>
          </li>
          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/experiencias" component={Experiencias} />
      <Route path="/projetos" component={Projetos} />
    </Router>
  );
}

export default App;
