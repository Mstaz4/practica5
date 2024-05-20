import React from 'react';
import './index.css';

import Login from './LoginForm.jsx';
import Register from './RegisterForm.jsx';
import Offer from './OfferRegister.jsx';
import Prospect from './ProspectRegister.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bienvenido a nuestro portal de empleo</h1>
        <p>Encuentra las mejores ofertas de trabajo en las áreas que te apasionan.</p>
      </header>
      <section>
        <h2>Inicio de Sesión</h2>
        <Login/>
      </section>

      <section>
        <h2>Registro de Usuario</h2>
        <Register/>
      </section>

      <section>
        <h2>Oferta de Empleo</h2>
        <Offer/>
      </section>

      <section>
        <h2>Registro de Postulado</h2>
        <Prospect/>
      </section>

    </div>
  );
}

export default App
