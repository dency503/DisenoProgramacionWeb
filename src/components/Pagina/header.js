import React from 'react';
import Logo from "../../img/Frame 1.png"
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header id="cajacabecera">
    <div id="cabecera" class="container">
        <figure id="logo" class="col-md-2 col-12">
            <a href=""><img src={Logo} alt="logo Variedades Mary Cruz"/></a>
        </figure>
        {/*<!-- *******************************************MENÚ******************************************* -->*/}
        <input type="checkbox" id="btn-menu" class="d-none"/>
        <label for="btn-menu" class="fa-solid fa-bars" id="mmovil"></label>
        <nav class="menu col-md-10 col-12">
            <ul class="nav justify-content-end">
                <li class="menum nav-item"><a class="nav-link" href="/">INICIO</a></li>
                <li class="menum nav-item"><a class="nav-link" href="/nosotros">NOSOTROS</a></li>
                <li class="menum nav-item"><a class="nav-link" href="/login">CUENTA</a></li>
                <li class="menum nav-item"><a class="nav-link" href="/contact">CONTACTENOS</a></li>
                {/*<!-- *******************************************SUB MENÚ******************************************* -->*/}
                <input type="checkbox" id="btn-submenu" class="d-none" />
                <li class="submenum nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="categoria" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        CATEGORIAS
                    </a>
                    <nav class="mmenu dropdown-menu" aria-labelledby="categoria">
                        <a class="dropdown-item" href="faldas">FALDAS</a>
                        <a class="dropdown-item" href="pantalones">PANTALONES</a>
                        <a class="dropdown-item" href="zapatos">ZAPATOS</a>
                        <a class="dropdown-item" href="vestidos">VESTIDOS</a>
                        <a class="dropdown-item" href="blusas">BLUSAS</a>
                        <a class="dropdown-item" href="camisas">CAMISAS</a>
                        <a class="dropdown-item" href="accesorios">ACCESORIOS</a>
                        <a class="dropdown-item" href="bolsos">BOLSOS</a>
                    </nav>
                </li>
                <li class="nav-item">
                    <a href="carrito" class="carro nav-link"> <i class="fa-solid fa-cart-shopping"></i>Carrito</a>
                </li>
            </ul>
        </nav>
    </div>
</header>
  );
}

export default Header;
