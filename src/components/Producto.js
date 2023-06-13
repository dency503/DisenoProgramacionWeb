import React from "react";
import { Link } from 'react-router-dom';

function Producto(props) {
    const { product } = props;


    if (!product) {


        return <div>Loading...</div>;

    }


    return (
        <div className="card" >
        <Link to={`/product/${product.id}`} className="card-link">
          <img className="card-img" src={product.urlImage} alt={product.imageName} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
              <span className="card-price">${product.price}</span>
            </p>
           
          </div>
        </Link>
      </div>

    );
}

export default Producto;