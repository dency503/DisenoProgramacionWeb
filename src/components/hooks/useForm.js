import { useState, useCallback } from 'react'
import { helpHttp } from '../helpHttp'
import swal from 'sweetalert'
export const useForm = (initialForm, validateForm) => {
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

         const API_ENDPOINT = 'https://formsubmit.co/ajax/dennisgodinez64@gmail.com';
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

export default useForm;
