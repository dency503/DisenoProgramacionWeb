import { useState, useCallback } from 'react'
import { helpHttp } from '../helpHttp'

export const useForm = (initialForm, validateForm) => {
   const [form, setForm] = useState(initialForm)
   const [errors, setErrors] = useState({})
   const [loading, setLoading] = useState(false)
   const [response, setResponse] = useState(null)
   


   const handleChange = useCallback(({ target: { name, value, type, checked } }) => {
      const inputValue = type === 'checkbox' ? checked : value;
      setForm({
         ...form,
         [name]: value,
         [name]: inputValue,
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
   const limpiarFormulario = () => {
      setForm(initialForm);  // Restablecer el estado del formulario a sus valores iniciales
    };
   const handleSubmit = async (e) => {
      e.preventDefault();
     

      if (Object.keys(errors).length === 0) {
         showSuccessAlert();
         setLoading(true);

        
         
try {
   
   const res = await helpHttp()
            .post(API_ENDPOINT, {
               body: form,
               headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",

               },
            }).then((res) => {

               setLoading(false);
               setResponse(true);
               limpiarFormulario();
            ocultarModalInsertar();
            })

            
      } catch (err) {
   console.error(err);
  
      }
   }else{
      showErrorAlert();
       limpiarFormulario();
            
            
   }}
   return {
      form,
      errors,
      loading,
      response,
      handleChange,
      handleSubmit,
      handleBlur
   }
}

export default useForm;
