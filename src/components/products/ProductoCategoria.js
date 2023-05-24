import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Producto from '../Producto';
function ProductCategory(){
  const [categorias, setCategorias] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/')
        .then(response => {
          setCategorias(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  

    return (
      <div className="productocategoria">
        {categorias.map((category) => (
          <div key={category.id}>
            <h2>{category.name}</h2>
            <div class="productos">
            {category.products.map((product) => (
              
             <Producto product={product} />
            ))}
          </div>
          </div>
        ))}
      </div>
    );
            }
export default ProductCategory;