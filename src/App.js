// App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#acerca">Acerca de mí</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contáctame</a></li>
        </ul>
      </nav>
      <div className="carrusel">
        hola
      </div>
      <div className='data'>
      <div className='divSobreMi'>
        <h3>UN POCO SOBRE MI</h3>
        <p className='sobreMi'>Mi nombre es Leonardo Urdaneta tengo 22 años soy de Venezuela, desde hace año y medio comencé un viaje de autoaprendizaje como programador, gracias a mi disciplina y aprendizaje constante he logrado hacer cosas que antes parecían muy complejas para mí. He desarrollado Proyectos propios como por ejemplo esta página web, pero también he creado Varios Clones y proyectos con React como un contador de Clics y una calculadora.
        </p>
      </div>
        <div className='divHabilidades'>
          <h3>MIS HABILIDADES</h3>
          <p className='pHabilidades'>Mi nombre es Leonardo Urdaneta tengo 22 años soy de Venezuela, desde hace año y medio comencé un viaje de autoaprendizaje como programador, gracias a mi disciplina y aprendizaje constante he logrado hacer cosas que antes parecían muy complejas para mí. He desarrollado Proyectos propios como por ejemplo esta página web, pero también he creado Varios Clones y proyectos con React como un contador de Clics y una calculadora.
          </p>
    </div>
      </div>
    </div>
  );
}

export default App;
