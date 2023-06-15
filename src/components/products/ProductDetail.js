
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import Agregar from '../js/agregaralcarrito'
import axios from 'axios';


function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
 
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/product/${id}`)
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
        <p>{product.description}
        </p>
        <Agregar productid={product.id} />
      </div>

    </div>



  );
}

export default ProductDetail;