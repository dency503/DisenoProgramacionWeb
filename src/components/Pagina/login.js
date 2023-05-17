import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom/dist';



function Login() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault(); // evita que se recargue la página al enviar el formulario
  
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + '/api/usuarios/login',
        { username, password },
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
    
    return <Navigate to="/" />;
  }
    return (
        <form onSubmit={handleSubmit}>
            <div className="cuadro">
                <h1>Acceder</h1>
                <div class="socialred">
                    <div class="div-4">
                        <picture>
                            <source srcset="
                  
                  https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?format=webp&width=2000 2000w,
                  https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628
                " type="image/webp" />
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628" srcset="
                  
                  https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628?width=2000 2000w,
                  https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7356f4843bcb42f48b53e189e3334628
                " className="image" />
                        </picture>
                        <div className="builder-image-sizer image-sizer"></div>
                    </div>
                    <div className="social-login-text">Continuar con Google</div>
                </div>
                <div className="socialred">
                    <div className="div-4">
                        <picture>
                            <source srcset="
                  
                  https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?format=webp&width=2000 2000w,
                  https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8
                " type="image/webp" />
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8" srcset="
                  
                  https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8?width=2000 2000w,
                  https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8372de16d2504e328e99f2916d15c1f8
                " class="image" />
                        </picture>
                        <div className="builder-image-sizer image-sizer-2"></div>
                    </div>
                    <div className="letraredes">Continuar con Google</div>
                </div>



                <div className="input-text">
                <input type="text" name='username'  placeholder={'Usuario'}  value={username} onChange={e => setUsername(e.target.value)} />
                </div>


                <div className="input-text">
                <input type="password" name='password' placeholder='Contraseña' value={password} onChange={e => setPassword(e.target.value)} />

                </div>


                <button className="login-button" type="submit">Login</button>

                <div className="letraspequeñas">
                    ¿Olvidé mi contraseña? <a href="URL_de_recuperacion">Recuperar contraseña</a>
                </div>

                <div className="letraspequeñas">
                    ¿No tienes una cuenta? <Link to="/register">Registrarse</Link>
                </div>

            </div>
                

        </form>



                );
}

export default Login;