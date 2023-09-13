import React from 'react';
import Encabezado from '../components/Encabezado'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import '../routesStyles/inicioSesionStyle.css'

function InicioSesion() {
    return (
        <div id='InicioSesion'>
            <Encabezado />
            <Menu />

            <div id="inicioSesion" className='row d-flex justify-content-center'>
                <div id='' className='row d-flex align-items-center formulario mt-4 ps-5 pt-2 pb-2 pe-5'>
                    <h1 role='navigation' tabIndex="0" className='txt_primario fw-bold text-center'>INICIAR SESIÓN</h1>
                    <div>
                        <label role='navigation' tabIndex="0" className='col-2' htmlFor="correo">Correo:</label>
                        <input require id="correo" className='bg_secundario col-10' type="email" name="contraseña" placeholder='Escribe tu correo' />
                    </div>
                    <div>
                        <label role='navigation' tabIndex="0" className='col-2' htmlFor="contrasena">Contraseña:</label>
                        <input require id="contrasena" className='bg_secundario col-10' type="password" name="contraseña" placeholder='Escribe tu contraseña' />
                    </div>
                    <div className='row d-flex justify-content-center '>
                        <button className='bg_terciario btn txt_primario'>INGRESAR</button>
                    </div>
                    <Link className='links txt_primario' to="/Prototipo_Usabilidad/recuperarContraseña">
                        <h5 className='text-center'>¿Olvidaste tu contraseña?</h5>
                    </Link>
                    <text role='navigation' tabIndex="0" >O continua con:</text>
                    <div className=''>
                        <img role='img' tabIndex="0" className='col-5 ms-4 me-3' src={require('../images/continuaConGoogle.png')} alt="Registrate con Google" />
                        <img role='img' tabIndex="0" className='col-5' src={require('../images/continuaConFacebook.png')} alt="Registrate con Facebook" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default InicioSesion;