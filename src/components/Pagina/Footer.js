import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Facebook from '../../img/icon/facebook.png'
import Instagram from '../../img/icon/icons8-instagram-24.png'
import Whatsapp from '../../img/icon/icons8-whatsapp-24.png'
function Footer() {

    return (
        

        <footer className="footer" >
        <div className="footer__social-media">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <h3 className="footer__list">Encuéntranos en:</h3>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                    </ul>
                    <h3 className="footer__info">&copy; Variedades Mary Cruz 2023. Todos los derechos reservados.</h3>
                </div>
            </div>
        </div>
    </footer>

/*<footer className="footer">
<div className="footer__social-media">
    <h3 className="footer__title">Encuéntranos en:</h3>
    <ul className="footer__list">
        <li><a href={"https://facebook.com"}> <img src={Facebook} alt="facebook"
            style={{ filter: 'invert(100%)' }}/></a></li>
        <li><a href="https://Instagram.com"><img src={Instagram} alt="Instagram"  style={{ filter: 'invert(100%)' }}></img></a>
        </li>
        <li><a href="https://Whatsapp.com"><img src={Whatsapp} alt="Whatsapp" style={{ filter:'invert(100%)' }}></img></a>
        </li>
    </ul>
</div>
<div className="footer__info">
    <p>&copy; Variedades Mary Cruz 2023. Todos los derechos reservados.</p>
</div>
</footer>*/



    


        );
}

export default Footer;