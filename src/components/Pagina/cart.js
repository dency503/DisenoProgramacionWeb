import React, { useState, useEffect } from 'react';
import axios from "axios";

function Cart() {
  const [carritoUsuario, setCarrito] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/carrito/`)
      .then(response => {
        setCarrito(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!carritoUsuario) {
    return (
      <div className="cart container">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <form action="" method="post">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h2>SHOPPING CART</h2>
              </div>
              <div className="card-body">
                {carritoUsuario.items.map(item => (
                  <div className="item" key={item.id}>
                    <div className="row">
                      <div className="col-md-2">
                        <img src={item.producto.imageName} alt="short" className="img-fluid" />
                      </div>
                      <div className="col-md-6">
                        <h3>{item.producto.name}</h3>
                        <h4>{item.producto.description}</h4>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex align-items-center">
                          <button className="btn btn-secondary" onClick={() => {}}>-</button>
                          <input type="number" id="producto1-contador" value="0" readOnly className="form-control" />
                          <button className="btn btn-secondary" onClick={() => {}}>+</button>
                          <h4>$ <span>{item.producto.price}</span></h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h2>SUMMARY</h2>
              </div>
              <div className="card-body">
                <div className="between">
                  <p>Items <span>3</span></p>
                  <p>$7.97</p>
                </div>
                <p>SHIPPING</p>
                <select className="form-select">
                  <option value="">Standard Delivery</option>
                </select>
                <p>CODE PROMOTIONAL</p>
                <input type="text" placeholder="ENTER YOUR CODE" className="form-control" />
              </div>
              <div className="card-footer">
                <div className="between">
                  <p>Subtotal price</p>
                  <p><span>$</span> {carritoUsuario.subtotal}</p>
                </div>
                <div className="between">
                  <p>Tax price</p>
                  <p><span>$</span> {carritoUsuario.impuesto}</p>
                </div>
                <div className="between">
                  <p>Total price</p>
                  <p><span>$</span> {carritoUsuario.total}</p>
                </div>
                <input type="submit" value="CHECKOUT" className="btn btn-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Cart;
