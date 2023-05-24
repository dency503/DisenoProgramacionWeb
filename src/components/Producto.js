import React from "react";
import { Link } from 'react-router-dom';

function Producto(props) {
    const { product } = props;


    if (!product) {


        return <div>Loading...</div>;

    }


    return (
        <div className="producto">
            <Link to={`/product/${product.id}`} >
                <img src={product.imageName}
                    alt="" />
                <div className="productoinfo">
                    <p> {product.name}<span>$ <span>{product.price}</span></span></p>
                    <div>
                        <span>Talla</span>
                        <div class="btns">
                            <div className="btnproducto">
                                S
                            </div>
                            <div className="btnproducto">
                                M
                            </div>
                            <div className="btnproducto">
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