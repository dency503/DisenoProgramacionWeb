import React from 'react'
import useForm from './hooks/useForm'

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: "",
}
const validateForm = (form) => {
    let errors = {};

    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.name.trim()) {
        errors.name = "El campo 'nombre' es requerido";

    }else if(!regexName.test(form.name.trim())){
        errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco'";
    }

    if (!form.email.trim()) {
        errors.email = "El campo 'Email' es requerido";

    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El campo 'Email' es incorrecto'";
    }

    if (!form.subject.trim()) {
        errors.subject = "El campo 'Asunto a tratar' es requerido";

    }

    if (!form.comments.trim()) {
        errors.comments = "El campo 'Comentatios' es requerido";

    }else if(!regexComments.test(form.comments.trim())){
        errors.comments = "El campo 'Comentarios' no debe exceder 255 caracteres'";
    }
    return errors;
}

let styles = {
    fontWeight: "bold",
    color: "#dc3545"

}
const ContactForm = () => {
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validateForm)
    return (
        <div className='boxcontainer'>
            <h2>contactForm</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Escribe tu nombre'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    className='input-text'
                    required
                />
                {errors.name && <p style={styles}>{errors.name}</p>}
                <input
                    type='email'
                    name='email'
                    placeholder='Escribe tu email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.email}
                    className='input-text'
                    required
                />

                {errors.email && <p style={styles}>{errors.email}</p>}

                <input
                    type='text'
                    name='subject'
                    placeholder='asunto a tratar'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className='input-text'
                    value={form.subject}
                    required
                />

                {errors.subject && <p style={styles}>{errors.subject}</p>}

                <textarea
                    name='comments'
                    className='input-text'
                    cols='50'
                    rows='5'
                    placeholder='Escribenos tus comentarios'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.comments}
                    required
                ></textarea>

                {errors.comments && <p style={styles}>{errors.comments}</p>}

                <input type='submit' value='enviar' className='a'/>
            </form>
        </div>
    )
}

export default ContactForm