import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Media from './componentes/Media';
import Contacto from './componentes/Contacto';
import Ministerios from './componentes/Ministerios';

const App: React.FC = () =>{
  return(
    <Router>

      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img className='social' src="/img/ibmv_logo.png" alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className='nav-link active' to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link active' to="/ministerios">Ministerios</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link active' to="/media">Media</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link active' to="/contacto">Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/media" element={<Media />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/ministerios" element={<Ministerios />}></Route>
        </Routes>

      </div>


    </Router>
  );
}

export default App;
