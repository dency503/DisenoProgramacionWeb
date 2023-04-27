import React from 'react';

function Header() {
  return (
    <div className="head">
    <div className="logo">
      <a href="/">Logo</a>
    </div>

    <nav className="navbar">
      <a href="/">Inicio</a>
      <a href="/Nosotros">Nosotros</a>
      <a href="/Account">Cuenta</a>
      <a href="/Contact">Contactanos</a>

      <a href="/Carrito">Carrito</a>
    </nav>
  </div>
  );
}

export default Header;
