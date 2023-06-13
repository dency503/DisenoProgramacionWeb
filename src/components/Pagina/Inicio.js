import React from 'react';

import Carrucel from '../Carrucel';
import ProductCard from '../products/ProductCard';
function Inicio() {

    return (
        <div>
            <Carrucel />

            <ProductCard name="Productos en oferta" path={`${process.env.REACT_APP_API_URL}/api/product/offers`} />
            <ProductCard name="Productos mas nuevos" path={`${process.env.REACT_APP_API_URL}/api/product/new`} />

        </div>

    );
}
export default Inicio;