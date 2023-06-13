
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import Agregar from '../js/agregaralcarrito'
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';
function ProductList() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
 
  
  useEffect(() => {
    axios.get(`${API_URL}/product/${id}`)
    .then((response) => setProduct(response.data))
    .catch(error => {
      setError(true);
       
        console.error('Ocurrió un error al obtener el producto:', error);
    // Mostrar un mensaje de error al usuario
    console.error('Ocurrió un error al obtener el producto:', error);
    
    
  });
  }, [id]);

  if (error || !product) {
    return (
      <div className="boxcontainer">
        <div className="productocategoria">
          Error 404: Producto no encontrado
        </div>
      </div>
    );
  }


  if (!product) {


    return (
      <div className="boxcontainer">
        <div className="productocategoria">
          <div>Loading...</div>;
        </div>

      </div>);
  }

  if (error || !product) {
    return (
      <div className="boxcontainer">
        <div className="productocategoria">
          Error 404: Producto no encontrado
        </div>
      </div>
    );
  }

  return (


    <div className="boxcontainer">

      <figure className="imgcontainer"><img
        src={product.urlImage}
        alt={product.imageName}/></figure>
      <div class="detalleproducto">
        <h1 >{product.name}</h1>
        <p>$ <span> {product.price}</span></p>
        <div>
          <span>Talla</span>
          <div className="btns">
            <div className="btn">
              S
            </div>
            <div className="btn">
              M
            </div>
            <div className="btn">
              L
            </div>
          </div>
        </div>
        <p>{product.details.description}
        </p>
       
      </div>

    </div>



  );
}

export default ProductList;
