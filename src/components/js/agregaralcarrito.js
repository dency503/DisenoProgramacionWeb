
/*import React, { useState,useCallback } from 'react';
import axios from 'axios';
import swal from 'sweetalert'
const AgregarAlCarrito = (initialForm, validateForm,props) => {
  const [form, setForm] = useState(initialForm)
  
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const handleChange = useCallback(({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    })
  }, [form]);

  const handleBlur = useCallback((e) => {
    handleChange(e);
    setErrors(validateForm(form));
 }, [form, handleChange]);

 
 const showSuccessAlert = () => {
  swal({
     title: "Enviando Formulario",
     icon: "success",
     button: "Acepted"
  });
}

const showErrorAlert = () => {
  swal({
     title: "Debes llenar el formulario",
     icon: "error",
     button: "ok"
  });
}

const handleSubmit = async (e) => {
  e.preventDefault();

  setErrors(validateForm(form))

  if (Object.keys(errors).length === 0) {
     showSuccessAlert();
     setLoading(true);

     const API_ENDPOINT = process.env.REACT_APP_API_URL +'/api/carrito/agregar';
try {

const res =  axios
.put(process.env.REACT_APP_API_URL + '/api/carrito/agregar', {
  productoId: props.productid,
  cantidad: cantidad
}, {
  withCredentials: true // Para enviar y recibir cookies de sesión
})
  .then(response => {

           setLoading(false);
           setResponse(true);

        })


  } catch (err) {
console.error(err);

  }
}else{
  showErrorAlert();
}}


  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
 }
}

export default AgregarAlCarrito;*/