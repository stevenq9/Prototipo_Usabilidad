import React from 'react';
import Encabezado from '../components/Encabezado'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import '../routesStyles/registroStyle.css'
import VerificarCorreo from '../components/VerificarCorreo';

function Registro() {
    return (
        <div id='Registro' className='bg_primario'>
            <Encabezado />
            <Menu />

            <div id='registro' className='row d-flex justify-content-center'>
                <form  className='row formulario d-flex align-items-center bg_auxiliar mt-4 ps-5 pt-2 pb-2 pe-5'>
                    <h1 className='text-center txt_primario fw-bold'>REGISTRO</h1>
                    <div>
                        <label className='col-2' htmlFor="nombre">Nombre:</label>
                        <input  type="text" id="nombre" className='bg_secundario col-10' placeholder='Escribe tu nombre' />
                    </div>
                    <div>
                        <label className='col-2' htmlFor="apellido">Apellido:</label>
                        <input type="text" id="apellido" className='bg_secundario col-10' placeholder='Escribe tu apellido' />
                    </div>
                    <div>
                        <label className='col-2' htmlFor="correo">Correo:</label>
                        <input id="correo" className='bg_secundario col-10' type="email" placeholder='Escribe tu correo electrónico' />
                    </div>
                    <div>
                        <label  className='col-2' htmlFor="contrasena">Contraseña:</label>
                        <input id="contrasena" className='bg_secundario col-10' type="password" name="contraseña" placeholder='Escribe tu contraseña' />
                    </div>
                    <div className='row d-flex justify-content-center '>
                        <button className='btn bg_terciario txt_primario'>REGISTRARME</button>
                    </div>
                    <span>O continua con:</span>
                    <div>
                        <img className='col-5 ms-4 me-3' src={require('../images/continuaConGoogle.png')} alt="Registrate con Google" />
                        <img className='col-5' src={require('../images/continuaConFacebook.png')} alt="Registrate con Facebook" />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Registro;