import React, { useState } from 'react';
import axios from 'axios';

function AgregarAlCarrito(props) {
    const [cantidad, setCantidad] = useState(1);
  
    const handleClick = () => {
      axios.put(`${process.env.REACT_APP_API_URL}carrito/agregar`, {
        productoId: props.productid,
        cantidad: cantidad
      }, {
        withCredentials: true // Para enviar y recibir cookies de sesión
      })
        .then(response => {
          // Handle successful response
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    };
  
    const handleCantidadChange = (event) => {
      setCantidad(event.target.value);
    };
  
    return (
      <div>
        <input type="number" value={cantidad} onChange={handleCantidadChange} />
        <button onClick={handleClick}>Agregar al carrito</button>
      </div>
    );
  }

  export default AgregarAlCarrito;