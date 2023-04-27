
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import Agregar from '../js/agregaralcarrito'
function ProductList() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);

  
   

  if (!product) {

    
    return (
      <div class="boxcontainer">
    <div class="productocategoria">
    <div>Loading...</div>;
    </div></div>);
  }
  

  return (
  

<div class="boxcontainer">

<div class="imgcontainer"><img
  src={product.imageName}
  alt=""></img></div>
<div class="detalleproducto">
  <h1 >{product.name}</h1>
  <p>$ <span> {product.price}</span></p>
  <div>
    <span>Talla</span>
    <div class="btns">
      <div class="btn">
        S
      </div>
      <div class="btn">
        M
      </div>
      <div class="btn">
        L
      </div>
    </div>
  </div>
  <p>{product.description}
  </p>
  <Agregar productid={product.id}/>
</div>

</div>
    


  );
}

export default  ProductList;
