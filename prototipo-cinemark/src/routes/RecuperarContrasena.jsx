import React from 'react';
import Encabezado from '../components/Encabezado'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import '../routesStyles/recuperarContraseñaStyle.css'

function RecuperarContrasena() {
    return (
        <div id='InicioSesion'>
            <Encabezado />
            <Menu />

            <div id="recuperarContraseña" className='row d-flex justify-content-center'>
                <div action="Post" className='row formulario d-flex align-items-center form mt-5 ps-5 pt-2 pb-2 pe-5'>
                    <h1 className='txt_terciario fw-bold text-center'>RECUPERAR CONTRASEÑA</h1>
                    <h5>Ingresa tu dirección de correo electrónico, te enviaremos un enlace para recuperar tu contraseña</h5>
                    <input className='row bg_secundario' type="email" placeholder='CORREO' />
                    <div className='row d-flex justify-content-center '>
                        <button className='row bg_terciario btn txt_primario'>ENVIAR</button>
                    </div>
                    <h5 className='row fw-bold text-center'>ENLACE ENVIADO</h5>
                    <h5 className='row fst-italic text-center'>¿No encuentras el correo? No olvides revisar tu bandeja de Spam</h5>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RecuperarContrasena;