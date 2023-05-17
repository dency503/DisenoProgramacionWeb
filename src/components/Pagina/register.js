import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault(); // evita que se recargue la página al enviar el formulario

        try {
            const response = await axios.post(
                process.env.REACT_APP_API_URL + '/api/usuarios/login',
                { username,email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );

            if (response.data.isLoggedIn) {
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (isLoggedIn) {
    
        return <Navigate to="/login" />;
      }

    return (

        <form onSubmit={handleSubmit}>
            <div class="cuadro">
                <h1>Registrarse</h1>
                <div class="socialred">
                    <div class="div-4">
                        <picture>
                            <source srcset="
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?format=webp&width=100   100w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?format=webp&width=200   200w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?format=webp&width=400   400w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?format=webp&width=800   800w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?format=webp&width=1200 1200w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?format=webp&width=1600 1600w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?format=webp&width=2000 2000w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628
          " type="image/webp" />
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628" srcset="
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?width=100   100w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?width=200   200w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?width=400   400w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?width=800   800w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?width=1200 1200w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?width=1600 1600w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?width=2000 2000w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628
          " class="image" />
                        </picture>
                        <div class="builder-image-sizer image-sizer"></div>
                    </div>
                    <div class="letraredes">Continuar con Google</div>
                </div>
                <div class="socialred">
                    <div class="div-4">
                        <picture>
                            <source srcset="
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?format=webp&width=100   100w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?format=webp&width=200   200w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?format=webp&width=400   400w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?format=webp&width=800   800w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?format=webp&width=1200 1200w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?format=webp&width=1600 1600w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?format=webp&width=2000 2000w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8
          " type="image/webp" />
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8" srcset="
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?width=100   100w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?width=200   200w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?width=400   400w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?width=800   800w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?width=1200 1200w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?width=1600 1600w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?width=2000 2000w,
            https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8
          " class="image" />
                        </picture>
                        <div class="builder-image-sizer image-sizer-2"></div>
                    </div>
                    <div class="letraredes">Continuar con Google</div>
                </div>


                <div class="input-text">
                    <input type="text" name='username' placeholder='Usuario' value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div class="input-text">
                <input type="text" name='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
                </div>


                <div class="input-text">
                    <input type="password" name='password' placeholder='Contraseña' value={password} onChange={e => setPassword(e.target.value)} />

                </div>


                <button type="submit" class="a">Registrarse</button>

                <div class="letraspequeñas">
                    ¿Olvidé mi contraseña? <a href="URL_de_recuperacion">Recuperar contraseña</a>
                </div>

                <div class="letraspequeñas">
                    ¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a>
                </div>

            </div>

        </form>
    );
}

export default Register;