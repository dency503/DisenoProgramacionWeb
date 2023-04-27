import React from "react";
import { Link } from 'react-router-dom';

function Producto(props) {
    const { product } = props;


    if (!product) {


        return <div>Loading...</div>;

    }


    return (
        <div class="producto">
            <Link to={`/product/${product.id}`} >
                <img src={product.imageName}
                    alt="" />
                <div class="productoinfo">
                    <p> {product.name}<span>$ <span>{product.price}</span></span></p>
                    <div>
                        <span>Talla</span>
                        <div class="btns">
                            <div class="btnproducto">
                                S
                            </div>
                            <div class="btnproducto">
                                M
                            </div>
                            <div class="btnproducto">
                                L
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Producto;