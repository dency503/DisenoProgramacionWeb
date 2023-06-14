import React, { useState,useEffect } from 'react';
import axios from "axios";
import Producto from "../Producto";
import { useParams } from 'react-router-dom';

function Search(){
    const { query } = useParams();
    const [products, setCategorias] = useState([]);

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/search?q=${query}`)
        .then(response => {
          setCategorias(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [query]);
  
    if (!products) {

    
        return <div>Loading...</div>;
        
      }
    return(
        <section class="container-producto">
     
            {products.map((product) => (
              
             <Producto product={product} />
            ))}
        </section>
    );
}

export default Search;