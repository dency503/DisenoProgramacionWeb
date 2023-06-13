import React, { useState, useEffect } from 'react';
import axios from "axios";
import AgregarAlCarrito from '../js/agregaralcarrito';



const initialForm = {
  name: "",
  cantidad: ""
}
const validateForm = (form) => {
  let errors = {};


  if (!form.cantidad.trim()) {
      errors.name = "El campo 'nombre' es requerido";

  }
  return errors;
}


const Cart = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
} = AgregarAlCarrito(initialForm, validateForm)
    const [carritoUsuario, setCarrito] = useState(null);
  
    useEffect(() => {
      axios.get(process.env.REACT_APP_API_URL +`/api/carrito/`)
        .then(response => {
          setCarrito(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    if (!carritoUsuario) {
      return (
        <div className="cart">
          <div>Loading...</div>
          <div class="spinner"></div>
        </div>
      );
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="cart">
          <section className="shopping-cart">
            <div className="title-cart">
              <h2>SHOPPING CART</h2>
            </div>
            <div className="shopping-details">
              {carritoUsuario.items.map(item => (
                <div className="item" key={item.id}>
                  <img src={item.producto.imageName} alt="short" />
                  <div className="item-name">
                    <h3>{item.producto.name}</h3>
                    <h4>{item.producto.description}</h4>
                  </div>
                  <div className="">
                    <button onClick="{}">-</button>
                    <input type="number" id="producto1-contador" value={form.cantidad}  onBlur={handleBlur}
                    onChange={handleChange} readOnly />
                    <button onClick="">+</button>
                    <h4>$ <span>{item.producto.price}</span></h4>
                    <AgregarAlCarrito productid={1} initialForm={initialForm} validateForm={validateForm} />
                  </div>
                </div>
              ))}


                    </div>

                </section>
                <section className="summary">
                    <div className="title-cart">
                        <h2>SUMMARY</h2>
                    </div>

                    <div className="summary-details">
                        <div className="between">
                            <p>Items <span>3</span></p>
                            <p>$7.97</p>
                        </div>
                        <p>SHIPPING</p>
                        <select name="" id="">
                            <option value="">Standar Delivery</option>

                        </select>

                        <p>CODE PROMOTIONAL</p>
                        <input type="text" placeholder="ENTRE YOUR CODE" />

                    </div>
                    <div className="total">
                        <div className="between">
                            <p>Subtotal price</p>
                            <p><span>$</span> {carritoUsuario.subtotal}</p>
                        </div>
                        <div className="between">
                            <p>Tax price</p>
                            <p><span>$</span> {carritoUsuario.impuesto}</p>
                        </div>
                        <div className="between">
                            <p>total price</p>
                            <p><span>$</span> {carritoUsuario.total}</p>
                        </div>
                        <input type="submit" value="CHECKOUT" />
                    </div>
                </section>
            </div>
        </form>
    );

}
export default Cart;